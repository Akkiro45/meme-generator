import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  memes = [];
  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memes = this.memeService.getMemes();
  }
}
