import { IsNotEmpty, IsString, Min, Length } from 'class-validator';

export class ArticleDTO {
  /**
   * Title field
   *
   * @type {string}
   */
  @IsNotEmpty()
  @IsString()
  @Length(4, 50)
  public readonly title!: string;

  /**
   * Body field
   *
   * @type {string}
   */
  @IsNotEmpty()
  @IsString()
  @Length(4, 255)
  public readonly body!: string;
}
