/* eslint-disable prettier/prettier */

const dbOptions: object = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity.js'],
  autoLoadEntities: false,
  synchronize: true,
};

const createConfigs: object = {
  cors: true,
  logger: ['log', 'error', 'warn', 'debug', 'verbose'],
};

const validatePipesConfigs: object = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
};

export { dbOptions, createConfigs, validatePipesConfigs };
