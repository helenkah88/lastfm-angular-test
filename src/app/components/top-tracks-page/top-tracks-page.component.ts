import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-top-tracks-page',
  templateUrl: './top-tracks-page.component.html',
  styleUrls: ['./top-tracks-page.component.css']
})
export class TopTracksPageComponent implements OnInit {

  tracks$: Observable<any[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTopTracks();
  }

  getTopTracks() {
    this.tracks$ = this.apiService.getAllTracks();
  }

}
