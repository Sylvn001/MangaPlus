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

@Entity('mangas')
export class Manga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 400, nullable: true })
  resume: string;

  @Column({ length: 100 })
  img: string;

  @ManyToOne(() => Author, (author: Author) => author.mangas)
  @JoinColumn({ name: 'authorId' })
  author: Author;

  @Column()
  authorId: number;

  @OneToMany(() => Chapter, (chapter: Chapter) => chapter.manga)
  @JoinColumn({ name: 'chapterId' })
  chapters: Chapter[];

  @Column({ type: Date, nullable: true })
  published_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
