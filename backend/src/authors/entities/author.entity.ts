import { Manga } from './../../mangas/entities/manga.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  name: string;

  @OneToMany(() => Manga, (manga: Manga) => manga.author)
  mangas: Manga[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
