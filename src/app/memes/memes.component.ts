import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  @Input() memes;
  constructor() { }

  ngOnInit(): void {
  }

}
