import { Controller, Body, Get, Post, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.model';
import { ArticleDTO } from '../dto/article.dto';

@Controller('article')
export class ArticleController {
  /**
   * Constructor
   *
   * @param {ArticleService} article
   * @returns {void}
   */
  public constructor(private readonly article: ArticleService) {}

  /**
   * Get all resources in storage
   *
   * @returns {Promise<Article[]>}
   */
  @Get()
  public async index(): Promise<Article[]> {
    try {
      return await this.article.getAllArticle();
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  /**
   * Insert a single resource into storage
   *
   * @param {ArticleDTO} params
   * @returns {Promise<Article>}
   */
  @Post()
  public async store(@Body() params: ArticleDTO): Promise<Article> {
    return await this.article.insertArticle(params);
  }
}
