import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article) private articleModel: typeof Article) {}

  async create(createArticleDto: CreateArticleDto) {
    console.log("create 2: ", {...createArticleDto})
    const article = await this.articleModel.create({...createArticleDto});
    console.log("create 3: ", article)

    return article;
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.articleModel.findAll();
    return articles;
  }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleModel.findOne({
      where: { id: id },
    });
    return article;
  }

  async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
    const article = await this.articleModel.findByPk(id);

    if (!article) {
      throw new NotFoundException({
        status: 'error',
        message: `Article with id ${id} does not exist`,
      });
    }
    await article.update(updateArticleDto);
    return article;
  }

  async remove(id: string) {
    const article = await this.findOne(id);
    await article.destroy();
    return `Successfully removed #${id} article`;
  }
}