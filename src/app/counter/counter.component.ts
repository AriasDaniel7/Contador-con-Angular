import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

  sumarCounter(): void {
    this.counter += 1;
  }

  restarCounter(): void {
    this.counter -= 1;
  }

  reiniciarCounter(): void {
    this.counter = 0;
  }
}
