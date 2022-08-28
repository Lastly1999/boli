import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { OutArticleEntity } from './out-article.entity';

// 标签表
@Entity({ name: 'out_tag' })
export class OutTagEntity extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  tagName: string;

  @ManyToMany(() => OutArticleEntity, (outArticleEntity) => outArticleEntity.tags)
  articles: OutArticleEntity[];
}
