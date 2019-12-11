import {Component, OnInit} from '@angular/core';
import {DictionaryService, Iword} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  word: Iword;

  constructor(private dictionaryService: DictionaryService) {
  }

  search1(word: string) {
    const meaning = this.dictionaryService.search(word)
    this.word = {
      key: word,
      meaning: meaning
    };
  }

  ngOnInit() {
  }

}
