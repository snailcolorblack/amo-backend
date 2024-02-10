import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmoModule } from './amo/amo.module';

@Module({
  imports: [AmoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
