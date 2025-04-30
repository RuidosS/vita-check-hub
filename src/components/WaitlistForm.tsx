
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
import { ArrowRight } from "lucide-react";

// Esquema de validação do formulário
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

  // Efeito para rolar até ao formulário quando navegado a partir de outras páginas
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
      const response = await fetch('https://a.klaviyo.com/api/lists/VxzSKi/relationships/subscribers/', {
        method: 'POST',
        headers: {
          'Authorization': 'Klaviyo-API-Key pk_ce347f746bfcd81f6850e9aa89686d2aae',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          data: {
            type: 'profile',
            attributes: {
              email: data.email,
              first_name: data.name,
              phone_number: data.phone,
            }
          }
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
    <section className="py-4" id="waitlist-form">
      <div className="container-custom max-w-lg relative z-10">
        <div className="bg-black/60 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-primary/30 border-t-primary/40 border-l-primary/40">
          {isSuccess ? (
            <Alert className="mb-6 bg-green-50/90 backdrop-blur-sm border-green-200">
              <AlertDescription className="text-green-800">
                Obrigado pela sua inscrição! Entraremos em contacto em breve.
              </AlertDescription>
            </Alert>
          ) : null}

          {error ? (
            <Alert className="mb-6 bg-red-50/90 backdrop-blur-sm border-red-200">
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          ) : null}

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">Junta-te à lista de espera</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-white/80">Preenche os dados abaixo para garantir o teu lugar</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium">Nome</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="O teu nome" 
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="O teu email" 
                        type="email" 
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium">Telemóvel</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="O teu número de telemóvel" 
                        type="tel" 
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white font-semibold text-lg py-6 mt-4 relative overflow-hidden group"
                disabled={isLoading}
              >
                <span className="flex items-center justify-center gap-2 relative z-10">
                  {isLoading ? "A processar..." : "Reserva já o teu lugar"}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-[#FF9B70] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              
              <div className="flex items-center justify-center gap-2 pt-3">
                <span className="inline-block w-4 h-4 text-primary/70">⏳</span>
                <p className="text-sm text-white/70">Vagas limitadas nesta fase inicial</p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
