
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComoFunciona from "./pages/ComoFunciona";
import ComoFuncionaAnual from "./pages/ComoFuncionaAnual";
import Faq from "./pages/Faq";
import Testes from "./pages/Testes";
import IdadeBiologica from "./pages/IdadeBiologica";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-funciona" element={<ComoFuncionaAnual />} />
          <Route path="/como-funciona/testes-em-casa" element={<ComoFunciona />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testes" element={<Testes />} />
          <Route path="/teste/idade-biologica" element={<IdadeBiologica />} />
          <Route path="/login" element={<Index />} />
          <Route path="/termos" element={<Index />} />
          <Route path="/privacidade" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
