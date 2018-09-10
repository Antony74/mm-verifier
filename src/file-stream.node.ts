import {Observer, Stream} from './stream';
import * as fs from 'fs';
import { Buffer } from 'buffer';
import { Machine } from 'xstate';

const machine = Machine({
    initial: 'initial',
    states: {
        initial: {
            onEntry: () => {
                console.log('Machine alive');
            }
        },
        waitingForData: {
        },
        waitingForNext: {
        },
        data: {
        },
        error: {
        },
        complete: {
        }
    }
});

console.log('so far so good');

// console.log(machine);

/*
export function createFileStream(filename: string): Stream<string> {

    const state: string = machine.initial;

    return {
        read(observer: Observer<string>): void {
            try {

                const stream = fs.createReadStream(filename);

                Buffer.alloc(1);
            } catch (e) {
                observer.error(e.toString());
            }
        }
    };
}
*/

