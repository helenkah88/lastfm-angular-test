import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  tracks$: Observable<any[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  search(form) {
    this.tracks$ = this.apiService.getByTrack(form.name);
  }

}
