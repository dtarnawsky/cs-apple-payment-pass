import { Component } from '@angular/core';
import { ApplePaymentPass, RequestTemplate } from '@ionic-enterprise/apple-payment-pass/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private paypass: ApplePaymentPass) { }

  async addCardToWallet() {
    try {
      const response = await this.paypass.addPaymentPass({
        headers: undefined,
        url: undefined,
        method: 'POST',
        body: undefined,
        card: undefined
      });
    } catch (e) {
      if (e.type === 'ServerError') {
        console.error(`Server Responded with status: ${e.statusCode} and body ${e.body}`);
      }
    }
  }
}
