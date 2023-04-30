import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessesService {
  public getBusinesses() {
    return [
      {
        id: '1',
        name: 'Apple',
        established: 2023,
      },
      {
        id: '2',
        name: 'Microsoft',
        established: 2023,
      },
      {
        id: '3',
        name: 'Amazon',
        established: 2023,
      },
    ];
  }
}
