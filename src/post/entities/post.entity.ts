import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OutputBlockData } from '../dto/create-post.dto';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'jsonb' })
  body: OutputBlockData[];

  @Column({ default: 0 })
  views?: number;

  @Column({ nullable: true })
  tags?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
