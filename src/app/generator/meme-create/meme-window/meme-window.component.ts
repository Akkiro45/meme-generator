import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import html2canvas from 'html2canvas';
import { MemeService } from 'src/app/meme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meme-window',
  templateUrl: './meme-window.component.html',
  styleUrls: ['./meme-window.component.css']
})
export class MemeWindowComponent implements OnInit {

  @ViewChild('window', { static: false }) window;
  @Output() clearControls = new EventEmitter();
  @Input() topTextProp;
  @Input() bottomTextProp;
  @Input() background;
  @Input() image;

  constructor(private memeService: MemeService, private router: Router) { }

  ngOnInit(): void {
  }

  // on post meme
  onPost() {
    html2canvas(this.window.nativeElement)
      .then(canvas => {
        this.memeService.postMeme(canvas.toDataURL('image/png'));          
        this.clearControls.emit();
        this.router.navigate(['my']);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
