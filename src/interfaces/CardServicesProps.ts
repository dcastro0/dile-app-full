interface ResolvedItem {
  id: number;
  name: string;
  services_id: number; 
}
interface CardServicesProps {
  id?: number;
  created_at?: string;
  update_at?: string;
  name?: string;
  name_client?: string;
  phone?: string;
  price?: number;
  observation?: string;
  progress?: number;
  completed?: number;
  archived?: number;
  category_id?: number;
  resolvedItems?: ResolvedItem[];
}

export { CardServicesProps };
