import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-language-slider',
  templateUrl: './language-slider.component.html',
  styleUrls: ['./language-slider.component.scss'],
})
export class LanguageSliderComponent implements OnInit {
  @Input() bottom;
  @Output() langChanged = new EventEmitter();
  isChecked: boolean;
  constructor() { }

  ngOnInit() {}

  languageChanged() {
    if (this.isChecked) {
      this.langChanged.emit('si');
    } else {
      this.langChanged.emit('en');
    }
  }

}
