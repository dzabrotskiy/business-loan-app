import type { Business } from './business';
import type { Provider } from './provider';

export type Application = {
  business: Business;
  amount: number;
  balanceSheet: [];
  provider: Provider;
  approvalRate?: number;
};
