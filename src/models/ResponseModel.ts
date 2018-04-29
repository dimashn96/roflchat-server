import { User } from './UserModel';

export class Response {
  status: number;
  data: [User] | User | string;
  message: string;
  constructor(status, message, data?) {
    this.status = status;
    this.data = data || '';
    this.message = message;
  }
}
