import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database/nest_mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
