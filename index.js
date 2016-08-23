// @flow

const x = (a) => Array.from(a);
const y = (a: number) => a*2;

x('17')
// x(17) // Error
// y('a') // Error

console.log('Start')
