import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  birthYear: number | undefined;

  calculateBirthYear(age: string): void {
    const currentYear = new Date().getFullYear();
    this.birthYear = currentYear - parseInt(age);
  }
}
