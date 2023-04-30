import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { BalanceSheetBody } from './types';
import { services } from '../core/constants/services';

@Injectable()
export class BalanceSheetService {
  constructor(private readonly httpService: HttpService) {}

  public async getBalanceSheet({ business, provider }: BalanceSheetBody) {
    const serviceProviderUrl = services?.[provider.name]?.url;

    if (!serviceProviderUrl) {
      throw new NotFoundException('Provider not found');
    }

    const { data } = await this.httpService
      .post(
        '/balance-sheet',
        { business, provider },
        { baseURL: serviceProviderUrl },
      )
      .toPromise();

    return data;
  }
}
