import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'out_user' })
export class OutUserEntity extends BaseEntity {
  @Column({ name: 'user_name', type: 'varchar' })
  userName: string;

  @Column({ name: 'pass_word' })
  passWord: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'avatar' })
  avatar: string;
}
