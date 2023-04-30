import { Injectable } from '@nestjs/common';

import { balanceSheet } from './balance-sheet';
import { BalanceSheetBody } from './types/balance-sheet';

@Injectable()
export class AppService {
  getBalanceSheet({ business: { name } }: BalanceSheetBody) {
    return balanceSheet[name];
  }
}
