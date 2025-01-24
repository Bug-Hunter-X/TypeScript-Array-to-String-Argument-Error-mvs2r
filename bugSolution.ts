function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John Smith"];
console.log(greeterArray(user)); // Correct: Returns an array of greetings

//Alternative solution: Modify the function to accept an array
function greeterImproved(person: string | string[]): string | string[]{
  if (typeof person === 'string'){
    return "Hello, " + person;
  } else {
    return person.map(p => "Hello, " + p);
  }
}
console.log(greeterImproved(user));
console.log(greeterImproved("Jane User"));