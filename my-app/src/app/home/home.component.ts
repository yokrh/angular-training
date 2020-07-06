import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultTitle: string = 'Title defined by parent component';
  title: string = this.defaultTitle;

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle(newTitle: string): void {
    console.log('HomeComponent#updateTitle() newTitle:', newTitle);
    this.title = newTitle || this.defaultTitle;
  }
}
