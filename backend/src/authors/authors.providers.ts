import { DataSource } from 'typeorm';
import { Author } from './entities/author.entity';

export const coursesProviders = [
  {
    provide: 'AUTHORS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Author),
    inject: ['DATA_SOURCE'],
  },
];
