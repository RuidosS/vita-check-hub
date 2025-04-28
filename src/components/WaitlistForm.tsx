
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Alert, AlertDescription } from "./ui/alert";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Número de telemóvel inválido"),
});

export const WaitlistForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Using a direct form submit approach
      const klaviyoForm = document.createElement('form');
      klaviyoForm.method = 'POST';
      klaviyoForm.action = 'https://manage.klaviyo.com/api/v2/list/VxzSKi/subscribe';
      klaviyoForm.target = '_blank'; // Open in new tab to avoid navigation
      klaviyoForm.style.display = 'none'; // Hide the form
      
      // Add the fields
      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        klaviyoForm.appendChild(input);
      };
      
      addField('api_key', 'WAxXuj');
      addField('email', data.email);
      addField('properties', JSON.stringify({
        '$first_name': data.name,
        'phone_number': data.phone
      }));
      
      // Add the form to the body
      document.body.appendChild(klaviyoForm);
      
      // Submit the form
      klaviyoForm.submit();
      
      // Remove the form from the body
      setTimeout(() => {
        document.body.removeChild(klaviyoForm);
      }, 1000);
      
      // Set success state
      setIsSuccess(true);
      form.reset();
      toast.success("Inscrição realizada com sucesso!");
    } catch (error) {
      console.error('Subscription error:', error);
      setError("Ocorreu um erro ao processar a sua inscrição. Por favor tente novamente.");
      toast.error("Erro ao realizar inscrição. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="waitlist">
      <div className="container-custom max-w-lg">
        {isSuccess ? (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              Obrigado pela sua inscrição! Entraremos em contacto em breve.
            </AlertDescription>
          </Alert>
        ) : null}
        
        {error ? (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertDescription className="text-red-800">
              {error}
            </AlertDescription>
          </Alert>
        ) : null}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="O teu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="O teu email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telemóvel</FormLabel>
                  <FormControl>
                    <Input placeholder="O teu número de telemóvel" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full text-white"
              disabled={isLoading}
            >
              {isLoading ? "A processar..." : "Juntar à Lista de Espera"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
