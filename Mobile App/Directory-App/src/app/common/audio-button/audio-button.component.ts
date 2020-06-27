import {Component, Input, OnInit} from '@angular/core';
import {AudioService} from '../../services/audio.service';

@Component({
  selector: 'app-audio-button',
  templateUrl: './audio-button.component.html',
  styleUrls: ['./audio-button.component.scss'],
})
export class AudioButtonComponent implements OnInit {
  @Input() audioFileUrl;
  constructor(private audioService: AudioService) {
    this.audioService.stop();
  }
  ngOnInit() {
    this.audioService.audioUrl = this.audioFileUrl;
  }

}
