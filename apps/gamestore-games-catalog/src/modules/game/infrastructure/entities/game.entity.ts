import { BaseEntity } from '@gamestore/typeorm';
import { Column, Entity } from 'typeorm';

@Entity()
export class Game extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  releaseDate: Date;

  @Column()
  price: number;

  @Column({ nullable: true })
  avatar?: string;
}
