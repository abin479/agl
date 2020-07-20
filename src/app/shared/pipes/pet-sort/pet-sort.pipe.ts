import { Pipe, PipeTransform } from '@angular/core';
import { Pet, SortOrder } from '../../models/pet.model';

@Pipe({
  name: 'petSort',
  pure: false
})
export class PetSortPipe implements PipeTransform {

  transform(pets: Pet[], sortOrder: SortOrder = 'asc'): Pet[] {
    if (sortOrder === 'asc') {
      pets.sort((pet1, pet2) => (pet1.name > pet2.name) ? 1 : -1);
    } else if (sortOrder === 'desc') {
      pets.sort((pet1, pet2) => (pet1.name < pet2.name) ? 1 : -1);
    }

    return pets;
  }

}
