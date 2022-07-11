/* eslint-disable prettier/prettier */

const createConfigs: object = {
  cors: true,
  logger: ['log', 'error', 'warn', 'debug', 'verbose'],
};

const validatePipesConfigs: object = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
};

export { createConfigs, validatePipesConfigs };
