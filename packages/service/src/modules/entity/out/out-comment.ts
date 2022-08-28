import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

// 文章评论表
@Entity({ name: 'out_comment' })
export class OutCommentEntity extends BaseEntity {
  @Column({ name: 'content', type: 'longtext' })
  content: string;
}
