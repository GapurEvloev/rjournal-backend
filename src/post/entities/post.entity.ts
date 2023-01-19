import {
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { OutputBlockData } from '../dto/create-post.dto';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'jsonb' })
  body: OutputBlockData[];

  // @Column()
  // description: string;

  @ManyToOne(() => UserEntity, { eager: true })
  user: UserEntity;

  @Column({ default: 0 })
  views?: number;

  @Column({ nullable: true })
  tags?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
