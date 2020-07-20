import { PetSortPipe } from './pet-sort.pipe';
import { Pet } from '../../models/pet.model';
import { unfilteredPets, descSortedPets, ascSortedPets } from 'src/app/mocks/getPetDetails.mock';

describe('PetSortPipe', () => {
  it('create an instance', () => {
    const pipe = new PetSortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort pet array in descending order when desc is passed as sortOrder', () => {
    const pipe = new PetSortPipe();
    const pipeInput: Pet[] = unfilteredPets;
    const pipeOutput: Pet[] = descSortedPets;
    expect((pipe).transform(pipeInput, 'desc')).toEqual(pipeOutput);
  });

  it('should sort pet array in ascending order as default when no order to be filtered is passed', () => {
    const pipe = new PetSortPipe();
    const pipeInput: Pet[] = unfilteredPets;
    const pipeOutput: Pet[] = ascSortedPets;
    expect((pipe).transform(pipeInput)).toEqual(pipeOutput);
  });

  it('should return an empty array as output if the input to the filter is an empty array', () => {
    const pipe = new PetSortPipe();
    const pipeInput: Pet[] = [];
    const pipeOutput: Pet[] = [];
    expect((pipe).transform(pipeInput, 'asc')).toEqual(pipeOutput);
  });
});
