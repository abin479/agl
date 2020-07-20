import { filteredPetDogs } from './../../../mocks/getPetDetails.mock';
import { Pet } from './../../models/pet.model';
import { PetFilterPipe } from './pet-filter.pipe';
import { unfilteredPets, filteredPetCats } from 'src/app/mocks/getPetDetails.mock';

describe('PetFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PetFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter all pet dog objects when dog is passed as type to be filtered from input pet object array', () => {
    const pipe = new PetFilterPipe();
    const pipeInput: Pet[] = unfilteredPets;
    const pipeOutput: Pet[] = filteredPetDogs;
    expect((pipe).transform(pipeInput, 'Dog')).toEqual(pipeOutput);
  });

  it('should filter all pet cat objects as default when no type to be filtered is passed from input pet object array', () => {
    const pipe = new PetFilterPipe();
    const pipeInput: Pet[] = unfilteredPets;
    const pipeOutput: Pet[] = filteredPetCats;
    expect((pipe).transform(pipeInput)).toEqual(pipeOutput);
  });

  it('should return an empty array as output if the input to the filter is an empty array', () => {
    const pipe = new PetFilterPipe();
    const pipeInput: Pet[] = [];
    const pipeOutput: Pet[] = [];
    expect((pipe).transform(pipeInput, 'Cat')).toEqual(pipeOutput);
  });
});
