
import React, { useEffect } from "react";
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
import { useLocation } from "react-router-dom";

// Schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Número de telemóvel inválido"),
});

export const WaitlistForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const location = useLocation();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  
  // Effect to scroll to the form when navigated from other pages
  useEffect(() => {
    if (location.state && location.state.scrollToForm) {
      const formElement = document.getElementById('waitlist-form');
      if (formElement) {
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.state]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://a.klaviyo.com/api/v2/list/VxzSKi/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: 'WAxXuj',
          profiles: [
            {
              email: data.email,
              first_name: data.name,
              phone_number: data.phone,
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Falha na inscrição');
      }

      setIsSuccess(true);
      setIsLoading(false);
      toast.success("Inscrição realizada com sucesso!");
      form.reset();

    } catch (error) {
      console.error('Erro na inscrição:', error);
      setError("Ocorreu um erro ao processar a sua inscrição. Por favor tente novamente.");
      toast.error("Erro ao realizar inscrição. Tente novamente.");
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
