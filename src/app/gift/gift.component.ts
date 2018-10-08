import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  img20 = '../assets/20reais.png';
  img50 = '../assets/50reais.png';
  img100 = '../assets/100reais.png';
  // giftValue = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addMoney(valor: number) {
    alert(valor);
    // this.giftValue = this.giftValue + valor;
  }
}
