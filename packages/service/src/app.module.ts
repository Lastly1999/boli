import { Module } from '@nestjs/common';
import { ConfigureModule } from './modules/common/configure/configure.module';
import { DatabaseModule } from './modules/common/database/database.module';

@Module({
  imports: [ConfigureModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
