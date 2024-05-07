import { Slot } from 'expo-router';
import { AuthProvider } from '@/contexts/Auth';

export default function Root() {
 
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
