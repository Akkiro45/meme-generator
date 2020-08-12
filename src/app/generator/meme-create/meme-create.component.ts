import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme-create',
  templateUrl: './meme-create.component.html',
  styleUrls: ['./meme-create.component.css']
})
export class MemeCreateComponent implements OnInit {

  topTextProp = {
    text: '',
    fontSize: '16',
    fontFamily: 'Arial',
    fontStyle: 'bold',
    color: '#ffffff'
  }
  bottomTextProp = {
    text: '',
    fontSize: '16',
    fontFamily: 'Arial',
    fontStyle: 'bold',
    color: '#ffffff'
  }
  background = {
    color: '#000000'
  };
  image = '';

  constructor() { }

  ngOnInit(): void {
  }
  onImgSelect(event: any) {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (ev) => {
        this.image = ev.target.result as string;
      };
    }
  }
  clearControls() {
    this.topTextProp = {
      text: '',
      fontSize: '16',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      color: '#ffffff'
    }
    this.bottomTextProp = {
      text: '',
      fontSize: '16',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      color: '#ffffff'
    }
    this.background = {
      color: '#000000'
    };
    this.image = '';    
  }
}
