import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtc',
  templateUrl: './produtc.component.html',
  styleUrls: ['./produtc.component.scss']
})
export class ProdutcComponent implements OnInit {

  title = 'our portfolio'

  cardDatas = [
    {
      productName: "platinum",
      path: '../../../assets/1.png'
    },
    {
      productName: "gold",
      path: '../../../assets/2.png'
    },
    {
      productName: "silver",
      path: '../../../assets/3.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
