export interface PetOwner {
  'name': string;
  'gender': 'Male' | 'Female';
  'age': number;
  'pets': Pet[];
}

export interface Pet {
  'name': string;
  'type': PetType;
}

export type PetType = 'Cat' | 'Dog' | 'Fish';

export type SortOrder = 'asc' | 'desc';
