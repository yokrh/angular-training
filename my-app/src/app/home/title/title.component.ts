import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  // タイトル
  title: String = 'Home Title';

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
  }

}
