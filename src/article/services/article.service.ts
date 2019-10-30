import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, DocumentQuery } from 'mongoose';
import { Article } from '../models/article.model';
import { ArticleDTO } from '../dto/article.dto';

@Injectable()
export class ArticleService {
  /**
   * Constructor
   *
   * @param {Model<Article>} Article
   * @returns {void}
   */
  public constructor(@InjectModel('Article') private readonly article: Model<Article>) {}

  /**
   * Get all data
   *
   * @returns {Promise<Article[]>}
   */
  public getAllArticle(): Promise<Article[]> {
    return this.article.find().exec();
  }

  /**
   * Insert data
   *
   * @param {ArticleDTO} params
   * @returns {Promise<Article>}
   */
  public insertArticle(params: ArticleDTO): Promise<Article> {
    return this.article.create(params);
  }
}
