import { Injectable } from '@nestjs/common';
import { BalanceSheetBody } from './types/balance-sheet';
import { balanceSheet } from './balance-sheet';

@Injectable()
export class AppService {
  getBalanceSheet({ business: { name } }: BalanceSheetBody) {
    return balanceSheet[name];
  }
}
