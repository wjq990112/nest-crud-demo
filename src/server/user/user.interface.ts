import { Document } from 'mongoose';

export interface User extends Document {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}
