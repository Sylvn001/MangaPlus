import { DataSource } from 'typeorm';
import { Mangas } from './entities/mangas.entity';

export const coursesProviders = [
  {
    provide: 'MANGAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Mangas),
    inject: ['DATA_SOURCE'],
  },
];
