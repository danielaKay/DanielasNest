import { Controller, Header, Get, Post, Body, Query, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @Header('content-type', 'application/json')
  async create(@Query() createArticleDto: CreateArticleDto) {
    console.log("create: ", createArticleDto);
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll() {
    console.log("findAll");
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    console.log("update");
    return this.articleService.update(id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("remove");
    return this.articleService.remove(id);
  }
}
