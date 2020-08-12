import { Component, OnInit, Input } from '@angular/core';
import { faHeart, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heart, faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons';
import { MemeService } from 'src/app/meme.service';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.css']
})
export class MemeCardComponent implements OnInit {

  @Input() meme;
  heartIcon = heart;
  bookmarkIcon = bookmark;
  faShare = faShare;
  
  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    // for likes and bokmark icon
    const userInfo = this.memeService.getUserInfo();
    if(this.meme.likes.includes(userInfo.email)) {
      this.heartIcon = faHeart;
    }
    if(userInfo.bookmark.includes(this.meme.id)) {
      this.bookmarkIcon = faBookmark;
    }
  }

  // on bookmark click
  onBookmarkClick() {
    this.memeService.addToBookmark(this.meme.id);
    this.bookmarkIcon = faBookmark;
  }

  // on like click
  onLikeClick() {
    this.memeService.likeMeme(this.meme.id);
    this.heartIcon = faHeart;
  }
}
