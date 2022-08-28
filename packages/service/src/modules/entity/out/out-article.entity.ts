import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { OutTagEntity } from './out-tag.entity';

/**
 * 文章表
 */
@Entity({ name: 'out_article' })
export class OutArticleEntity extends BaseEntity {
  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'content', type: 'longtext' })
  content: string;

  @Column({ name: 'status', type: 'int' })
  status: number;

  @ManyToMany(() => OutTagEntity, (outTagEntity) => outTagEntity.articles)
  @JoinTable({
    name: 'out_article_tags',
    joinColumns: [
      {
        name: 'article_id',
      },
    ],
    inverseJoinColumns: [
      {
        name: 'tag_id',
      },
    ],
  })
  tags: OutTagEntity[];
}
