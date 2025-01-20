import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { investmentInput } from '../investment-input.model';
@Component({
  selector: 'app-investment-form',
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent {
  @Output() calculate = new EventEmitter<investmentInput>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    console.log('hi');
    console.log(
      this.enteredAnnualInvestment,
      this.enteredInitialInvestment,
      this.enteredDuration
    );
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
