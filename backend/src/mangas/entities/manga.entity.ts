import { Chapter } from '../../chapters/entities/chapter.entity';
import { Author } from '../../authors/entities/author.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(() => Author, (author: Author) => author.mangas)
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
