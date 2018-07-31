import test from 'ava';

import { add } from './other';

interface Foo {
	bar: string
}

test('arrays are equal', t => {
	t.deepEqual([1, 2], [1, 2]);
	t.equal(add(1, 2), 3);
});
