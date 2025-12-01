import { DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  lightMode: boolean=true;

  ngOnInit(): void {
    this.changeLightMode()
  }


  changeLightMode() {
    if (typeof document === 'undefined') return;
    this.lightMode = !this.lightMode;
    if (this.lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }
}
