import {
  PetOwner,
  Pet
} from '../shared/models/pet.model';

export const getPetDetailsMock: PetOwner[] = [{
    name: 'Bob',
    gender: 'Male',
    age: 23,
    pets: [{
        name: 'Garfield',
        type: 'Cat'
      },
      {
        name: 'Fido',
        type: 'Dog'
      }
    ]
  },
  {
    name: 'Jennifer',
    gender: 'Female',
    age: 18,
    pets: [{
      name: 'Garfield',
      type: 'Cat'
    }]
  },
  {
    name: 'Steve',
    gender: 'Male',
    age: 45,
    pets: null
  },
  {
    name: 'Fred',
    gender: 'Male',
    age: 40,
    pets: [{
        name: 'Tom',
        type: 'Cat'
      },
      {
        name: 'Max',
        type: 'Cat'
      },
      {
        name: 'Sam',
        type: 'Dog'
      },
      {
        name: 'Jim',
        type: 'Cat'
      }
    ]
  },
  {
    name: 'Samantha',
    gender: 'Female',
    age: 40,
    pets: [{
      name: 'Tabby',
      type: 'Cat'
    }]
  },
  {
    name: 'Alice',
    gender: 'Female',
    age: 64,
    pets: [{
        name: 'Simba',
        type: 'Cat'
      },
      {
        name: 'Nemo',
        type: 'Fish'
      }
    ]
  }
];

export const maleOwnedPets: Pet[] = [{
  name: 'Garfield',
  type: 'Cat'
}, {
  name: 'Fido',
  type: 'Dog'
}, {
  name: 'Tom',
  type: 'Cat'
}, {
  name: 'Max',
  type: 'Cat'
}, {
  name: 'Sam',
  type: 'Dog'
}, {
  name: 'Jim',
  type: 'Cat'
}];

export const femaleOwnedPets: Pet[] = [{
  name: 'Garfield',
  type: 'Cat'
}, {
  name: 'Tabby',
  type: 'Cat'
}, {
  name: 'Simba',
  type: 'Cat'
}, {
  name: 'Nemo',
  type: 'Fish'
}];

export const unfilteredPets: Pet[] = [{
  name: 'Garfield',
  type: 'Cat'
}, {
  name: 'Fido',
  type: 'Dog'
}, {
  name: 'Garfield',
  type: 'Cat'
}, {
  name: 'Tom',
  type: 'Cat'
}, {
  name: 'Max',
  type: 'Cat'
}, {
  name: 'Sam',
  type: 'Dog'
}, {
  name: 'Jim',
  type: 'Cat'
}, {
  name: 'Tabby',
  type: 'Cat'
}, {
  name: 'Simba',
  type: 'Cat'
}, {
  name: 'Nemo',
  type: 'Fish'
}];

export const filteredPetCats: Pet[] = [{
  name: 'Garfield',
  type: 'Cat'
}, {
  name: 'Garfield',
  type: 'Cat'
}, {
  name: 'Tom',
  type: 'Cat'
}, {
  name: 'Max',
  type: 'Cat'
}, {
  name: 'Jim',
  type: 'Cat'
}, {
  name: 'Tabby',
  type: 'Cat'
}, {
  name: 'Simba',
  type: 'Cat'
}];

export const filteredPetDogs: Pet[] = [{
    name: 'Fido',
    type: 'Dog'
  }, {
    name: 'Sam',
    type: 'Dog'
  }];

export const ascSortedPets: Pet[] = [{
    name: 'Fido',
    type: 'Dog'
  }, {
    name: 'Garfield',
    type: 'Cat'
  }, {
    name: 'Garfield',
    type: 'Cat'
  }, {
    name: 'Jim',
    type: 'Cat'
  }, {
    name: 'Max',
    type: 'Cat'
  }, {
    name: 'Nemo',
    type: 'Fish'
  }, {
    name: 'Sam',
    type: 'Dog'
  }, {
    name: 'Simba',
    type: 'Cat'
  }, {
    name: 'Tabby',
    type: 'Cat'
  }, {
    name: 'Tom',
    type: 'Cat'
  }];

export const descSortedPets: Pet[] = [{
    name: 'Tom',
    type: 'Cat'
  }, {
    name: 'Tabby',
    type: 'Cat'
  }, {
    name: 'Simba',
    type: 'Cat'
  }, {
    name: 'Sam',
    type: 'Dog'
  }, {
    name: 'Nemo',
    type: 'Fish'
  }, {
    name: 'Max',
    type: 'Cat'
  }, {
    name: 'Jim',
    type: 'Cat'
  }, {
    name: 'Garfield',
    type: 'Cat'
  }, {
    name: 'Garfield',
    type: 'Cat'
  }, {
    name: 'Fido',
    type: 'Dog'
  }, ];
