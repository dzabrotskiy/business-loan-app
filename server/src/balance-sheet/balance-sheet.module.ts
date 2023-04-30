import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { BalanceSheetController } from './balance-sheet.controller';
import { BalanceSheetService } from './balance-sheet.service';

@Module({
  imports: [HttpModule],
  controllers: [BalanceSheetController],
  providers: [BalanceSheetService],
})
export class BalanceSheetModule {}
