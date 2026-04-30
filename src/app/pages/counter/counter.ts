import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.html',
})
export class CounterPage {
    counter  = 10;
    counterSignal = signal(10);

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update(current => current + value);
    }
    
    reset() {
        this.counter = 10;
        this.counterSignal.set(10);
    }

}