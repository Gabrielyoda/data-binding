import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtc',
  templateUrl: './produtc.component.html',
  styleUrls: ['./produtc.component.scss']
})
export class ProdutcComponent implements OnInit {

  cardDatas = [
    {
      productName: "Platinum",
      path: '../../../assets/1.png'
    },
    {
      productName: "Gold",
      path: '../../../assets/2.png'
    },
    {
      productName: "Silver",
      path: '../../../assets/3.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
