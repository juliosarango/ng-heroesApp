import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  //debemos poner pure: false para que siempre compruebe los cambios existentes
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
