import { BaseEntity } from '@gamestore/typeorm';
import { Column, Entity } from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @Column()
  text: string;

  @Column()
  rank: number;
}
