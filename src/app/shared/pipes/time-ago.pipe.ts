import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false // so it updates as time passes
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string | number): string {
    if (!value) return '';

    const date = value instanceof Date ? value : new Date(value);
    const seconds = Math.floor((+new Date() - +date) / 1000);

    if (seconds < 29) // less than 30s
      return 'just now';

    const intervals: { [key: string]: number } = {
      yr: 31536000,
      mon: 2592000,
      week: 604800,
      day: 86400,
      hr: 3600,
      min: 60,
      sec: 1
    };

    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0) {
        return counter === 1
          ? `${counter} ${i}`
          : `${counter} ${i}s`;
      }
    }
    return value.toString();
  }
}