import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 文章表
 */
@Entity({ name: 'out_article' })
export class OutArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @PrimaryColumn({ name: 'article_id' })
  title: string;
  @CreateDateColumn({ name: 'create_at' })
  createAt: Date;
}
