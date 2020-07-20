import { Pipe, PipeTransform } from '@angular/core';
import { Pet, PetType } from '../../models/pet.model';

@Pipe({
  name: 'petFilter',
  pure: false
})
export class PetFilterPipe implements PipeTransform {

  transform(pets: Pet[], petType: PetType = 'Cat'): Pet[] {
    return pets.filter(pet => pet.type === petType);
  }

}
