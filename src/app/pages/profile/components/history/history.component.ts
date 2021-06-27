import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  historyTrans = [
    {
      dateHistory : "2021-05-20",
      productName: "Gold",
      qtyGram: "2",
      totalPrice: "250000"
    },
    {
      dateHistory : "2021-05-23",
      productName: "Silver",
      qtyGram: "4",
      totalPrice: "350000"
    },
    {
      dateHistory : "2021-05-20",
      productName: "Platinum",
      qtyGram: "6",
      totalPrice: "1250000"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
