import { Body, Controller, Post } from '@nestjs/common';

import { LoanService } from './loan.service';
import { Application } from '../core/types/application';

@Controller('/loan')
export class LoanController {
  constructor(private readonly loadService: LoanService) {}

  @Post('/decision')
  private getDecision(@Body() application: Application) {
    return this.loadService.getDecision(application);
  }
}
