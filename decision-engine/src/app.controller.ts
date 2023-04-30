import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  getDecision(@Body() body) {
    // I'm not sure about logic here
    return {
      status: 'APPROVED',
      preAssessment: body.preAssessment,
    };
  }
}
