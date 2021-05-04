let hi = "hi";

const user = {
  name: "duc",
  age: 3,
};

interface User {
  name: string;
  age: number;
}

const user2: User = {
  name: "duc2",
  age: 3,
};

// err notify
// const userError: User = {
//   aname: "duc2", // err
//   age: "3", // err
// };
