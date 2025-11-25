import { DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  lightMode: boolean=true;
  myTime = signal(new Date());
  myTimezone = signal("Not found");

  locatedTimes = signal<{ timezone:string, value:Date }[]>([]);
  timezones = [
    'UTC',
  ];

  ngOnInit(): void {
    const timezones = Intl.supportedValuesOf('timeZone');
    this.timezones.push(...timezones);
    
    setInterval(() => {
      this.updateTime()
    }, 1000);
    this.updateTime();
    this.changeLightMode()
  }

  updateTime() {
    this.myTime.set(new Date());
    this.myTimezone.set(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.locatedTimes.set(this.getLocatedTimes());
  }

  getLocatedTimes(): {timezone: string, value: Date }[] {
    const times: {timezone: string, value: Date }[] = [];
    for (const timezone of this.timezones) {
      times.push({ timezone, value: this.getLocatedTime(timezone) });
    }
    return times;
  }

  getLocatedTime(timezone: string): Date {
    const time = this.myTime();
    const locatedTime = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
    return locatedTime;
  }

  changeLightMode() {
    this.lightMode = !this.lightMode;
    if (this.lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }
}
