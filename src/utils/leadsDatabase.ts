
// Simple in-memory database for collecting leads
// In a production environment, this would be replaced with a proper database

// Define the Lead type
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

// In-memory storage
let leads: Lead[] = [];

// Try to load leads from localStorage on initialization
const initializeLeads = () => {
  try {
    const storedLeads = localStorage.getItem('ouma_health_leads');
    if (storedLeads) {
      leads = JSON.parse(storedLeads);
    }
  } catch (error) {
    console.error('Error loading leads from localStorage:', error);
  }
};

// Initialize leads when the module is loaded
initializeLeads();

// Save leads to localStorage
const persistLeads = () => {
  try {
    localStorage.setItem('ouma_health_leads', JSON.stringify(leads));
  } catch (error) {
    console.error('Error saving leads to localStorage:', error);
  }
};

// Add a new lead
export const addLead = (lead: Omit<Lead, 'id' | 'createdAt'>): Lead => {
  const newLead: Lead = {
    id: crypto.randomUUID(),
    ...lead,
    createdAt: new Date().toISOString(),
  };
  
  leads = [...leads, newLead];
  persistLeads();
  return newLead;
};

// Get all leads
export const getAllLeads = (): Lead[] => {
  return [...leads];
};

// Clear all leads (for testing/admin purposes)
export const clearLeads = (): void => {
  leads = [];
  persistLeads();
};

// Export a function to count leads
export const getLeadCount = (): number => {
  return leads.length;
};
