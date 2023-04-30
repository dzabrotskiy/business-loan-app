import { axiosInstance } from '@services/api';

import { useQuery } from '@tanstack/react-query';
import { Provider } from 'types/provider';

export function useProvidersQuery() {
  return useQuery(['providers'], async () => {
    const { data } = await axiosInstance.get<Provider[]>('/api/providers');
    return data;
  });
}
