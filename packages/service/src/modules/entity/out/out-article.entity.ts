import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';

/**
 * 文章表
 */
@Entity({ name: 'out_article' })
export class OutArticleEntity extends BaseEntity {
  @Column({ name: 'title' })
  title: string;
}
