import { Sequelize } from 'sequelize-typescript';
import { Article } from '../article/entities/article.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: '.db/data.sqlite3',
        // autoLoadModels: true,
        // synchronize: true,
        models: [Article],
      });
      sequelize.addModels([Article]);
      await sequelize.sync();
      return sequelize;
    },
  },
];