import {Clock} from './clock'

let clock = new Clock();

// subscribe to the onTick Event
clock.on('onTick', (theDate) => {
    console.log(`The time is ${theDate}`);
    this.count++;
    if (this.count > 10) {
        // unsubscribe after 10 seconds
        clock.off('onTick');
        console.log('Clock stopped after 10 seconds');
    }
});
