import images from "./images/";

const ad2222Characters = {
  consuela: {
    name: "Consuela",
    image: images.consuela,
    reference: "Family Guy",
  },
  lois: {
    name: "Lois Griffin",
    image: images.lois,
    reference: "Family Guy",
  },
  patrick: {
    name: "Patrick Star",
    image: images.patrick,
    reference: "Family Guy",
  },
  peter: {
    name: "Peter Griffin",
    image: images.peter,
    reference: "Family Guy",
  },
  stewie: {
    name: "Stewie Griffin",
    image: images.stewie,
    reference: "Family Guy",
  },
  tom: {
    name: "Tom",
    image: images.tom,
    reference: "Tom and Jerry",
  },
};

const paranormalCharacters = {
  freddy: {
    name: "Freddy Krueger",
    image: images.freddy,
    reference: "A Nightmare on Elm Street",
  },
  hannibal: {
    name: "Hannibal Lecter",
    image: images.hannibal,
    reference: "Hannibal",
  },
  it: {
    name: "It",
    image: images.it,
    reference: "It",
  },
  demagorgon: {
    name: "Demagorgon",
    image: images.demagorgon,
    reference: "Stranger Things",
  },
  tricycle_from_it: {
    name: "Tricycle from The Shining",
    image: images.shiningtricycle,
    reference: "The Shining",
  },
  leatherface: {
    name: "Leatherface",
    image: images.leatherface,
    reference: "Leatherface",
  },
};

//create dropdown lists in global scope
let ad2222CharactersList = [];

let paranormalCharactersList = [];

Object.values(ad2222Characters).forEach((object) => {
  ad2222CharactersList.push(object);
});

Object.values(paranormalCharacters).forEach((object) => {
  paranormalCharactersList.push(object);
});

export { ad2222CharactersList, paranormalCharactersList };
