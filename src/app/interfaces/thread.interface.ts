import {MessageInterface} from './message.interface';

export interface ThreadInterface {
  id: number;
  name: string;
  created_at: Date;
  latest_message?: MessageInterface;
}
