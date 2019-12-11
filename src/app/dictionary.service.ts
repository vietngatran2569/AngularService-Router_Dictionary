import {Injectable} from '@angular/core';

export interface Iword {
  key: string;
  meaning: string;

}

@Injectable({
  providedIn: 'root'
})

export class DictionaryService {
  private words: Iword[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'}
  ];
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }
  constructor() {
  }
}
