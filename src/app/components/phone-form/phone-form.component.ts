import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css'],
})
export class PhoneFormComponent implements OnInit {
  id: number;
  name: string;
  price: number;

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {}

  onSubmit() {
    // add phone
    const newPhone: Phone = {
      id: this.id,
      name: this.name,
      imageUrl: 'assets/img/1.jpg',
      price: this.price,
    };

    this.phoneService.addPhone(newPhone);
  }

  clearState() {}
}
