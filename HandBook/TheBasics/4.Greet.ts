function greet(name: string, date: Date) {
  console.log(`Greeting ${name}, today is ${date.toDateString()}`);
}

greet("Duc", new Date());
