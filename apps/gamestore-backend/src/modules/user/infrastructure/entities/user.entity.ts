import { BaseEntity } from '@gamestore/typeorm';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Game } from '../../../game/infrastructure';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 500 })
  username: string;

  @Column({ unique: true })
  email: string;

  @ManyToMany(() => Game, (game) => game.wishlisted)
  wishlist: Game[];

  @Column()
  password: string;
}
