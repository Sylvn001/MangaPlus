import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Chapter } from '../../chapters/entities/chapter.entity';

@Entity('pages')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chapter, (chapter: Chapter) => chapter.pages)
  @JoinColumn({ name: 'chapterId' })
  chapter: Chapter;

  @Column({ length: 100 })
  img_url: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
