import {
  Column,
  CreateDateColumn,
  Entity,
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
  chapter: Chapter;

  @Column({ length: 100 })
  img_url: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
