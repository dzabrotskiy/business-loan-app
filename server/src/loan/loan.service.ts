import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { Application } from '../core/types/application';
import { BalanceSheetService } from '../balance-sheet/balance-sheet.service';
import { decisionEngineUrl } from '../core/constants/services';

@Injectable()
export class LoanService {
  constructor(
    private readonly httpsService: HttpService,
    private readonly balanceSheetService: BalanceSheetService,
  ) {}

  public async getDecision({ business, provider, amount }: Application) {
    let preAssessment = 20;

    const balanceSheet = await this.balanceSheetService.getBalanceSheet({
      business,
      provider,
    });

    const profitOrLoss = balanceSheet.reduce(
      (acc, curr) => acc + curr.profitOrLoss,
      0,
    );

    const assetsValue =
      balanceSheet.reduce((acc, curr) => acc + curr.assetsValue, 0) /
      balanceSheet.length;

    if (profitOrLoss > 0) {
      preAssessment = 60;
    }

    if (assetsValue > amount) {
      preAssessment = 100;
    }

    const { data } = await this.httpsService
      .post(decisionEngineUrl, { preAssessment })
      .toPromise();

    return data;
  }
}
