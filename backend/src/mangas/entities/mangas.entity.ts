import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mangas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  img: string;

  @Column({ length: 500 })
  resume: string;
}
