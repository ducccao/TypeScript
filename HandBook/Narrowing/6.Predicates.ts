interface Fish {
  name: string;
  legs: 0;
  swim: Function;
}
interface Bird {
  name: string;
  legs: 2;
}

function isFist(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
