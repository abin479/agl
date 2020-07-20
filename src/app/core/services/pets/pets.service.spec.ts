import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PetsService } from './pets.service';
import { PetOwner } from 'src/app/shared/models/pet.model';
import { getPetDetailsMock } from 'src/app/mocks/getPetDetails.mock';

describe('PetsService', () => {
  let service: PetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PetsService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPetDetails() should return data', () => {
    const serviceResponse: PetOwner[] = getPetDetailsMock;
    service.getPetDetails().subscribe((response) => {
      expect(response).toEqual(serviceResponse);
    });
    const request = httpMock.expectOne('http://agl-developer-test.azurewebsites.net/people.json');
    expect(request.request.method).toBe('GET');
    request.flush(serviceResponse);
  });
});
