import { axiosInstance } from '@services/api';
import type { Business } from 'types/business';
import type { Provider } from 'types/provider';
import type { BalanceSheet } from 'types/balance-sheet';

import { useQuery } from '@tanstack/react-query';

type UseBalanceSheetQueryParams = {
  business: Business;
  provider: Provider;
};

export function useBalanceSheetQuery(params: UseBalanceSheetQueryParams) {
  return useQuery(
    [],
    async () => {
      const { data } = await axiosInstance.post<BalanceSheet>(
        '/api/balance-sheet',
        params,
      );

      return data;
    },
    { refetchOnWindowFocus: false },
  );
}
