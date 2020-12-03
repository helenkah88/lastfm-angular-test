import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-search-by-track',
  templateUrl: './search-by-track.component.html',
  styleUrls: ['./search-by-track.component.css']
})
export class SearchByTrackComponent implements OnInit {

  @Output() onSubmitted: EventEmitter<any> = new EventEmitter();

  searchForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSumbit() {
    this.onSubmitted.emit(this.searchForm.value);
    this.searchForm.reset();
  }

  get name() {
    return this.searchForm.get('name');
  }

}
