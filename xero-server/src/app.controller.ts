import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BalanceSheetBody } from './types/balance-sheet';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/balance-sheet')
  getBalanceSheet(@Body() body: BalanceSheetBody) {
    return this.appService.getBalanceSheet(body);
  }
}
