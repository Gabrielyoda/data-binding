import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  serviceBenefits = [
    {
      benefitName : "Transaction",
      description: "Our Transaction is simple and secure"
    },
    {
      benefitName : "Delivery",
      description: "We Have Free Delivery Service To All City in Indonesia"
    },
    {
      benefitName : "Reward",
      description: "More transaction more point more reward"
    }
  ]

  productBenefits = [
    {
      benefitName : "Legality",
      description: "We Commit to Keep your trusted with legality transaction"
    },
    {
      benefitName : "Price",
      description: "Good Quality with best prices"
    },
    {
      benefitName : "Brand",
      description: "Our product is the best on quality and brand"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
