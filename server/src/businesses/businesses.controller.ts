import { Controller, Get } from '@nestjs/common';
import { BusinessesService } from './businesses.service';

@Controller('/businesses')
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Get()
  private getBusinesses() {
    return this.businessesService.getBusinesses();
  }
}
