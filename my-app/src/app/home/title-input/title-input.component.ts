import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.css']
})
export class TitleInputComponent implements OnInit {

  titleInput: string;
  @Output() newTitleEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTitleInput(newTitle: string): void {
    console.log('TitleInputComponent#onChangeTitleInput() newTitle:', newTitle);
    this.newTitleEvent.emit(newTitle);
  }
}
