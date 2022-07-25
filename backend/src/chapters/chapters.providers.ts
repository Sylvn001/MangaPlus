import { DataSource } from 'typeorm';
import { Chapter } from './entities/chapter.entity';

export const chaptersProviders = [
  {
    provide: 'CHAPTERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Chapter),
    inject: ['DATA_SOURCE'],
  },
];
