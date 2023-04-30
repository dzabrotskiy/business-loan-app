import { axiosInstance } from '@services/api';
import { Business } from 'types/business';

import { useQuery } from '@tanstack/react-query';

export function useBusinessesQuery() {
  return useQuery(['businesses'], async () => {
    const { data } = await axiosInstance.get<Business[]>('/api/businesses');
    return data;
  });
}
