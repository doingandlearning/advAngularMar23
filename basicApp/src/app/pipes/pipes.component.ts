import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  name = 'Mohsin';
  date = new Date();
  amountInBank = 100_000_000.123123;
  text = 'Star Rats';
}
