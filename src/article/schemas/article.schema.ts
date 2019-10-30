import { Schema } from 'mongoose';

/**
 * Article schema
 *
 * @type {Schema}
 */
export const ArticleSchema: Schema = new Schema({
  /**
   * Title field
   *
   * @type {string}
   */
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },

  /**
   * Body field
   *
   * @type {string}
   */
  body: {
    type: String,
    required: true,
    maxlength: 255,
  },
});
