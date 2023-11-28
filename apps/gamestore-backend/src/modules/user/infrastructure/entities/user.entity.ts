import { BaseEntity } from '@gamestore/typeorm';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 500 })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
