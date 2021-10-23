import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log('numbers', numbersCollection.data);

const characterCollection = new CharactersCollection('aXbay');
characterCollection.sort();
console.log('numbers', characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
linkedList.sort();
linkedList.print();
