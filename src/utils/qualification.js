import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

export class Qualification {
  constructor() {
    this.course = '';
    this.id = nanoid();
    this.from = '';
    this.to = '';
    this.institution = '';
  }
}
