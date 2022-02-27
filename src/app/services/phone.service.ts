import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phones: Phone[];

  constructor() {

    this.phones = [
      { id: 1, name: 'iPhone 1', imageUrl: 'assets/img/1.jpg', price: 100 },
      { id: 2, name: 'iPhone 2', imageUrl: 'assets/img/2.jpg', price: 200 },
      { id: 3, name: 'iPhone 3', imageUrl: 'assets/img/3.jpg', price: 300 },
      { id: 4, name: 'iPhone 4', imageUrl: 'assets/img/4.jpg', price: 400 },
    ];
  }

  getPhones(): Observable<Phone[]> {
    return of(this.phones);
  }

  addPhone(phone: Phone) {
    this.phones.push(phone);
  }
}
