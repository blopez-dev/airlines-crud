
export function loginUser() {
  let userName = prompt("What is your username?");
  userName ? console.log(`Hi ${userName}, welcome to Skylab Airlines`) : alert('Is necessary a username');
}