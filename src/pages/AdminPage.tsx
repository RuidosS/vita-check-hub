
import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getAllLeads, Lead, clearLeads } from "../utils/leadsDatabase";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Download, Trash2 } from "lucide-react";

const AdminPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load leads when the component mounts
  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    setIsLoading(true);
    try {
      const allLeads = getAllLeads();
      setLeads(allLeads);
    } catch (error) {
      console.error('Error loading leads:', error);
      toast.error("Erro ao carregar os leads.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearLeads = () => {
    if (window.confirm("Tem certeza que deseja apagar todos os leads? Esta ação não pode ser desfeita.")) {
      try {
        clearLeads();
        setLeads([]);
        toast.success("Todos os leads foram apagados com sucesso.");
      } catch (error) {
        console.error('Error clearing leads:', error);
        toast.error("Erro ao apagar os leads.");
      }
    }
  };

  const handleExportCSV = () => {
    // Create CSV content
    const headers = ["ID", "Nome", "Email", "Telemóvel", "Data de Inscrição"];
    const csvRows = [
      headers.join(','),
      ...leads.map(lead => [
        lead.id,
        lead.name,
        lead.email,
        lead.phone || '',
        new Date(lead.createdAt).toLocaleString('pt-PT')
      ].join(','))
    ];
    const csvContent = csvRows.join('\n');

    // Create and download the CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ouma-health-leads-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Exportação de leads concluída com sucesso.");
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-PT');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Admin - Lista de Leads</h1>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleExportCSV}
                disabled={leads.length === 0}
                className="flex items-center gap-2"
              >
                <Download size={18} />
                Exportar CSV
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleClearLeads}
                disabled={leads.length === 0}
                className="flex items-center gap-2"
              >
                <Trash2 size={18} />
                Apagar Todos
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <p>Carregando leads...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <p className="text-xl">Não existem leads registados.</p>
            </div>
          ) : (
            <div className="rounded-lg border shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telemóvel</TableHead>
                    <TableHead>Data de Inscrição</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.phone || "-"}</TableCell>
                      <TableCell>{formatDate(lead.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          <div className="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Nota Importante</h2>
            <p className="text-amber-700">
              Os leads são armazenados apenas no localStorage do navegador. Isso significa que:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-amber-700">
              <li>Os dados são mantidos apenas neste dispositivo/navegador</li>
              <li>Se limpar os dados do navegador, os leads serão perdidos</li>
              <li>Para uma solução de produção, recomenda-se implementar uma base de dados real</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
