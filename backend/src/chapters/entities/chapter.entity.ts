import { Manga } from '../../mangas/entities/manga.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Page } from '../../mangas/entities/page.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Manga, (manga: Manga) => manga.chapters)
  manga: Manga;

  @Column()
  scan: string;

  @OneToMany(() => Page, (page: Page) => page.chapter)
  pages: Page[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
