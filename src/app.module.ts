import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ArticlesModule } from './articles/articles.module';
import { ArticleModule } from './article/article.module';
// import { ProductModule } from './product/product.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';

// import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    // ArticlesModule, 
    ArticleModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
