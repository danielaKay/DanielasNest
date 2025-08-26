
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto'; // import from folder
import { UpdatePostDto } from './dto/update-post.dto';
// import { ListAllEntities } from './dto/list-all-entities.dto';
import { PostsService } from './posts.service';
import { Post as SinglePost } from './interfaces/post.interface';


@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async create(@Query() query: any, @Body() createPostDto: CreatePostDto) {
    console.log(query);
    this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<SinglePost[]> {
    return this.postsService.findAll();
  }

  // @Post()
  // create(@Body() createPostDto: CreatePostDto) {
  //   return 'This action adds a new post';
  // }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all posts (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} post`;
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} post`;
  }
}
