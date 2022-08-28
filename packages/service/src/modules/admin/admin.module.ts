import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { ArticleController } from './article/article.controller';
import { TagController } from './tag/tag.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { ArticleService } from './article/article.service';
import { TagService } from './tag/tag.service';

@Module({
  controllers: [UserController, AuthController, ArticleController, TagController],
  providers: [AuthService, UserService, ArticleService, TagService],
})
export class AdminModule {}
