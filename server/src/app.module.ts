import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessesModule } from './businesses/businesses.module';
import { ProvidersModule } from './providers/providers.module';
import { BalanceSheetModule } from './balance-sheet/balance-sheet.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [BusinessesModule, ProvidersModule, BalanceSheetModule, LoanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
