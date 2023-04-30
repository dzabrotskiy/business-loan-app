import type { Business } from 'types/business';
import type { Provider } from 'types/provider';

export type Application = {
  business: Business;
  amount: number;
  balanceSheet: [];
  provider: Provider;
  approvalRate?: number;
};
