interface ResolvedItem {
  id: number;
  name: string;
  services_id: number; 
}
interface CardServicesProps {
  id: number;
  created_at: Date;
  date_create: Date;
  name: string;
  name_client: string;
  phone: string;
  price: number;
  observation: string;
  progress: number;
  completed: boolean;
  archived: boolean;
  category_id: number;
  resolved_item: ResolvedItem[];
}

export { CardServicesProps };
