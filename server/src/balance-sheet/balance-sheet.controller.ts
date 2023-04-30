import { Body, Controller, Post } from '@nestjs/common';
import { BalanceSheetService } from './balance-sheet.service';
import type { BalanceSheetBody } from './types';

@Controller('/balance-sheet')
export class BalanceSheetController {
  constructor(private readonly balanceSheetService: BalanceSheetService) {}

  @Post()
  private getBalanceSheet(@Body() body: BalanceSheetBody) {
    return this.balanceSheetService.getBalanceSheet(body);
  }
}
