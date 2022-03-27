import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class Counter{
    switchToActive: number = 0;
    switchToInactive: number = 0;

    switchToActiveAvg: number = 0;
    switchToInactiveAvg: number = 0;

    updateAvgs = new EventEmitter();

    calculateAverage(){
        this.switchToActiveAvg = this.switchToActive/(this.switchToActive + this.switchToInactive);
        this.switchToInactiveAvg = this.switchToInactive/(this.switchToActive + this.switchToInactive);
        this.updateAvgs.emit();
    }
}