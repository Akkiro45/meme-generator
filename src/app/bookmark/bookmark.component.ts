import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  memes = [];
  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memes = this.memeService.getBookmarkedMeme();
  }

}
