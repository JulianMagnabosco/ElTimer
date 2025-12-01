import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TimezonePipe } from '../../pipes/timezone-pipe';

@Component({
  selector: 'app-home-component',
  imports: [DatePipe,TimezonePipe],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
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

}
