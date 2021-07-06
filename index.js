let person = {
  getGreeting() {
    return "Hello";
  },
};

let friend = {
  getGreeting() {
    return super.getGreeting() + ', Hi!';
  },
};

Object.setPrototypeOf(friend, person);

console.log(friend.getGreeting());