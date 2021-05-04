interface User {
  name: string;
  age: number;
}

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getAdminUser(): User {
  return;
}

function delUser(): User {
  return;
}

const user01: User = new UserAccount("Duccao", 22);

console.log(user01.age);
