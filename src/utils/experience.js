import {nanoid} from 'nanoid';

export class Experience {
  constructor() {
    this.id = nanoid();
    this.company = '';
    this.position = '';

    this.from = '';
    this.to = '';
  }
}
