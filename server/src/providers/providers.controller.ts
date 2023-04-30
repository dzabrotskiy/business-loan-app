import { Controller, Get } from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Controller('/providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  private getProviders() {
    return this.providersService.getProviders();
  }
}
