import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
	standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {

	@Input()
	gameType:string = "Digital - PS5";

	@Input()
	gamePrice:string = "R$ 199.99";

}
