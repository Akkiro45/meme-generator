import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.css']
})
export class MemeListComponent implements OnInit {
  memes = [];
  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memes = this.memeService.getMyMemes();
  }

}
