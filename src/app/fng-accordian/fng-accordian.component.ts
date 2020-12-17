import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fng-accordian',
  templateUrl: './fng-accordian.component.html',
  styleUrls: ['./fng-accordian.component.css']
})
export class FngAccordianComponent implements OnInit {
  isFirstOpen = true;

  constructor() { }

  ngOnInit() {
  }

}