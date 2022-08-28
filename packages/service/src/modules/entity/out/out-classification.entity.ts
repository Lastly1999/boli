import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'out_classification' })
// 文章分类表
export class OutClassificationEntity extends BaseEntity {
  @Column({ name: 'classification_name', type: 'varchar' })
  classificationName: string;
}
