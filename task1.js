function randomDog() {
 
    let dog = Math.floor(Math.random() * 6)+1;
    console.log(dog);
    switch (dog) {
    case 1:
      return "Scottish Terrier";
      break;
    case 2:
      return "Red Setter";
      break;
    case 3:
      return "Doberman";
      break;
    case 4:
      return "Wippet";
      break;
    case 5:
      return "Airdail Terrier";
      break;
    case 6:
      return "Yorkie";
      break;

    default: return "Golden Retriever";
  }
}

console.log(randomDog());
console.log(randomDog());