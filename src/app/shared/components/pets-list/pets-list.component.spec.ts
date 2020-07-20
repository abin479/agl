import { getPetDetailsMock, maleOwnedPets, femaleOwnedPets } from './../../../mocks/getPetDetails.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsListComponent } from './pets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PetSortPipe } from '../../pipes/pet-sort/pet-sort.pipe';
import { PetFilterPipe } from '../../pipes/pet-filter/pet-filter.pipe';
import { PetsService } from 'src/app/core/services/pets/pets.service';
import { of } from 'rxjs';

describe('PetsListComponent', () => {
  let component: PetsListComponent;
  let fixture: ComponentFixture<PetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsListComponent, PetFilterPipe, PetSortPipe],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Cat' as default petType selected in dropdown`, () => {
    component.ngOnInit();
    expect(component.petType).toEqual('Cat');
  });

  it(`should have 'asc' as default sortOrder selected in dropdown`, () => {
    component.ngOnInit();
    expect(component.sortOrder).toEqual('asc');
  });

  it('should set petOwners by calling the backend endpoint', async(() => {
    component.ngOnInit();
    expect(component.petOwners).toEqual([]);
    const petsService = fixture.debugElement.injector.get(PetsService);
    const spy = spyOn(petsService, 'getPetDetails').and.returnValue(of(getPetDetailsMock));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.petOwners).toEqual(getPetDetailsMock);
    });
  }));

  it('should have separate male and female owned pets into separate arrays on calling filterByOwnerGender', () => {
    component.ngOnInit();
    expect(component.maleOwnedPets).toEqual([]);
    expect(component.femaleOwnedPets).toEqual([]);
    component.petOwners = getPetDetailsMock;
    component.filterByOwnerGender();
    expect(component.maleOwnedPets).toEqual(maleOwnedPets);
    expect(component.femaleOwnedPets).toEqual(femaleOwnedPets);
  });

});
