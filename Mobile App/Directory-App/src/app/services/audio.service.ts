import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  isAudioPlaying = false;
  audioUrl;
  isAudioLoaded = false;
  audio = new Audio();
  constructor() { }

  playStopAudio() {
    if (!this.isAudioLoaded) {
      this.audio.src = this.audioUrl;
      this.audio.load();
    }
    if (!this.isAudioPlaying) {
      this.audio.play();
      this.isAudioPlaying = true;
    } else if (this.isAudioPlaying) {
      this.audio.pause();
      this.isAudioPlaying = false;
    }
  }

  stop() {
    this.audio.pause();
    this.isAudioLoaded = false;
    this.audioUrl = null;
    this.isAudioPlaying = false;
  }
}
