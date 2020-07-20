import { Pet, PetOwner, SortOrder, PetType } from './../../models/pet.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetsService } from './../../../core/services/pets/pets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit, OnDestroy {

  public petOwners: PetOwner[] = [];
  public maleOwnedPets: Pet[] = [];
  public femaleOwnedPets: Pet[] = [];
  public otherGenderOwnedPets: Pet[] = [];
  public petType: PetType = 'Cat';
  public sortOrder: SortOrder = 'asc';
  public isLoading = false;

  private subscription = new Subscription();

  constructor(private petsService: PetsService) { }

  public ngOnInit(): void {
    this.getPetDetails();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // get pet details from backend
  public getPetDetails(): void {
    this.isLoading = true;
    this.subscription.add(this.petsService.getPetDetails().subscribe(response => {
      this.petOwners = response;
      this.filterByOwnerGender();
    },
    error => {
      console.error('error fetching pets list from backend', error);
    },
    () => this.isLoading = false ));
  }

  // filter pets by the gender of their owner
  public filterByOwnerGender(): void {
    for (const petOwner of this.petOwners) {
      switch (petOwner?.gender) {
        case 'Male':

          // perform null check and check if the petOwner owns any pets
          if (petOwner?.pets !== null && petOwner?.pets.length) {

            // loop through each pet owned by males
            petOwner?.pets.forEach(pet => {

              // add the pet to maleOwnedPets array
              this.maleOwnedPets.push(pet);
            });
          }
          break;

        case 'Female':
          if (petOwner?.pets !== null && petOwner?.pets.length) {
            petOwner?.pets.forEach(pet => {
              this.femaleOwnedPets.push(pet);
            });
          }
          break;

        default:
          break;
      }
    }
  }

  public onSortOrderChange($event): void {
    this.sortOrder = $event.target.value;
  }

  public onPetTypeChange($event): void {
    this.petType = $event.target.value;
  }

}
