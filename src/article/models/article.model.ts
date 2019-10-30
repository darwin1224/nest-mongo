import { Document } from 'mongoose';

export interface Article extends Document {
  /**
   * Title field
   *
   * @type {string}
   */
  readonly title: string;

  /**
   * Body field
   *
   * @type {string}
   */
  readonly body: string;
}
