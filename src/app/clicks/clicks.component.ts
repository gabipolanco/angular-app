import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.scss']
})
export class ClicksComponent implements OnInit {

  clicks : number[] = []

  constructor() { }

  contar() {
    this.clicks.push(this.clicks.length + 1)
  }

  ngOnInit(): void {
  }

}