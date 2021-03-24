import {choice, remove} from './helpers';
import fruits from './foods';

const fruit = choice(fruits);
console.log(`I'd like one ${fruit} please`)
console.log(`Here you go: ${fruit}`)

remove(fruits, fruit)

if(remove(fruits, fruit) === undefined){
  console.log(`${fruits.length}`)
}
