import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editors-note',
  templateUrl: './editors-note.page.html',
  styleUrls: ['./editors-note.page.scss'],
})
export class EditorsNotePage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
