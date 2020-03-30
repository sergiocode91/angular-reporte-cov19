import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, column:string, args:string): any {
    if(!value)return null;
    if(!args)return value;

    return value.filter(singleItem =>
      singleItem[column].toLowerCase().includes(args.toLowerCase())      
    );
  }

}
