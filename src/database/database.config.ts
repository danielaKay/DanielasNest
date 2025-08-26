import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Article } from '../article/entities/article.entity';
// export const dataBaseConfig: SequelizeModuleOptions = {
//   dialect: 'sqlite',
//   storage: '.db/data.sqlite3',
//   autoLoadModels: true,
//   synchronize: true,
// };

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/data.sqlite3',
  autoLoadModels: true,
  synchronize: true,
  models: [Article],
};