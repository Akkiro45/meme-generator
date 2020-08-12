import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor() { }

  // adding meme to memes array
  postMeme(meme) {
    const memes = this.getMemes();
    const email = localStorage.getItem('email');
    const memeObj = {
      meme,
      createdBy: email,
      createdAt: new Date().getTime(),
      id: new Date().getTime() + email,
      likes: []
    }
    memes.unshift(memeObj);
    localStorage.setItem('memes', JSON.stringify(memes));
  }

  // getting list of memes
  getMemes() {
    let memes = JSON.parse(localStorage.getItem('memes'));
    if(!memes) memes = [];
    return memes; 
  }

  // adding to bookmark
  addToBookmark(id: string) {
    let bookmark = JSON.parse(localStorage.getItem('bookmark'));
    if(!bookmark) bookmark = [];
    bookmark.unshift(id);
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }

  // getting bookmarked meme
  getBookmarkedMeme() {
    const bookmark = JSON.parse(localStorage.getItem('bookmark'));
    if(!bookmark) return [];
    else {
      const memes = this.getMemes();
      return memes.filter(meme => bookmark.includes(meme.id));
    }
  }

  // getting my memes
  getMyMemes() {
    const email = localStorage.getItem('email');
    const memes = this.getMemes();
    return memes.filter(meme => meme.createdBy === email);
  }

  // on like meme
  likeMeme(id: string) {
    let memes = this.getMemes();
    const email = localStorage.getItem('email');
    const memeIndex = memes.findIndex(meme => meme.id === id);
    memes[memeIndex].likes.unshift(email);
    localStorage.setItem('memes', JSON.stringify(memes));
  }

  // getting email and bookmarks
  getUserInfo() {
    const email = localStorage.getItem('email');
    let bookmark = JSON.parse(localStorage.getItem('bookmark'));
    if(!bookmark) bookmark = [];
    return {
      email,
      bookmark
    }
  }
}
