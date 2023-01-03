export function helloWorld() {
  console.log('1');
  return 'Hello World from my example modern npm package!';
}

export function goodBye() {
  return  'Goodbye from my example modern npm package!';
}

export default {
  helloWorld,
  goodBye,
};