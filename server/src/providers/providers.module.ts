import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';

@Module({
  imports: [],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
