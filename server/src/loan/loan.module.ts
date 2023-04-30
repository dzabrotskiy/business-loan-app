import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { BalanceSheetService } from '../balance-sheet/balance-sheet.service';

@Module({
  imports: [HttpModule],
  controllers: [LoanController],
  providers: [LoanService, BalanceSheetService],
})
export class LoanModule {}
