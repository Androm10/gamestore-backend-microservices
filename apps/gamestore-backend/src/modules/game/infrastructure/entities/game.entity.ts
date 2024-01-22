import { BaseEntity } from '@gamestore/typeorm';
import { Column, Entity, ManyToMany } from 'typeorm';
import { User } from '../../../user/infrastructure';

@Entity()
export class Game extends BaseEntity {
  @Column()
  name: string;

  @Column()
  gameCatalogId: number;

  @Column()
  releaseDate: Date;

  @Column()
  price: number;

  @ManyToMany(() => User, (user) => user.wishlist)
  wishlisted: User[];

  @Column({ nullable: true })
  avatar?: string;
}
