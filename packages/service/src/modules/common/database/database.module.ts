import { Module, Global } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OutArticleEntity } from 'src/modules/entity/out/out-article.entity';
import { OutClassificationEntity } from 'src/modules/entity/out/out-classification.entity';
import { OutTagEntity } from 'src/modules/entity/out/out-tag.entity';
import { OutUserEntity } from 'src/modules/entity/out/out-user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get('DATABASE_TYPE'),
          host: configService.get('DATABASE_HOST'),
          port: configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
        } as TypeOrmModuleOptions),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([OutArticleEntity, OutClassificationEntity, OutTagEntity, OutUserEntity]),
  ],
  exports: [DatabaseModule],
})
export class DatabaseModule {}
