import { Manga } from 'src/mangas/entities/manga.entity';
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
import { Page } from '../../pages/entities/page.entity';

@Entity('chapters')
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  title: string;

  @ManyToOne(() => Manga, (manga: Manga) => manga.chapters)
  @JoinColumn({ name: 'mangaId' })
  manga: Manga;

  @Column()
  mangaId: string;

  @Column()
  scan: string;

  @OneToMany(() => Page, (page: Page) => page.chapter)
  pages: Page[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
