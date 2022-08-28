import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { ConfigureModule } from './modules/common/configure/configure.module';
import { DatabaseModule } from './modules/common/database/database.module';

@Module({
  imports: [ConfigureModule, DatabaseModule, AdminModule],
  controllers: [],
})
export class AppModule {}
