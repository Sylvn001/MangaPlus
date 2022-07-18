import { Chapter } from './chapter.entity';
import { Author } from '../../authors/entities/author.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Manga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 300 })
  resume: string;

  @Column({ length: 100 })
  img: string;

  @OneToOne(() => Author)
  @JoinColumn()
  author: Author;

  @OneToMany(() => Chapter, (chapter: Chapter) => chapter.manga)
  chapters: Chapter[];

  @Column({ type: 'date' })
  published_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
