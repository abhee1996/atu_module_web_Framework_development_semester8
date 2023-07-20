import { Pipe, PipeTransform } from '@angular/core';
import { Lives } from '../live/lives';

@Pipe({ name: 'today' })
export class TodayPipe implements PipeTransform {
  transform(values: Lives[], filter: string): Lives[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: Lives) => {
      const nameFound =
        value.features[0].properties.site_name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const capitalFound =
        value.features[0].properties.wind_speed !== -1//.indexOf(filter.toLowerCase()) !== -1;

      if (nameFound || capitalFound) {
        return value;
      }
    });
  }
}
