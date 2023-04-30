import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvidersService {
  public getProviders() {
    return [
      {
        id: '1',
        name: 'XERO',
      },
      {
        id: '2',
        name: 'MYOB',
      },
    ];
  }
}
