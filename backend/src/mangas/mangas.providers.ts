import { DataSource } from 'typeorm';
import { Manga } from './entities/manga.entity';

export const mangasProviders = [
  {
    provide: 'MANGAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Manga),
    inject: ['DATA_SOURCE'],
  },
];
