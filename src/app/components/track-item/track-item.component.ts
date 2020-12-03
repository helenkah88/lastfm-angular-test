import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Track } from '../../shared/interfaces/track.interface';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackItemComponent implements OnInit {

  @Input() track: Track;

  constructor() { }

  ngOnInit(): void {
  }

}
