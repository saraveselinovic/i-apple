import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  id: number;
  name: string;
  imageUrl: string;
  price: number;

  isNew: boolean = true;

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {

    // subscribe to the selectedPhone observable
    this.phoneService.selectedPhone.subscribe((phone) => {

      if (phone.id !== null) {

        // something was clicked
        this.isNew = false;

        this.id = phone.id;
        this.name = phone.name;
        this.imageUrl = phone.imageUrl;
        this.price = phone.price;
      }
    });
  }

  onSubmit() {

    if (this.isNew) {

      // add phone
      this.phoneService.addPhone({ id: this.id, name: this.name, imageUrl: 'assets/img/1.jpg', price: this.price });

    } else {

      // update phone
      this.phoneService.updatePhone({ id: this.id, name: this.name, imageUrl: this.imageUrl, price: this.price });
    }

    this.clearState();
  }

  clearState() {
    this.isNew = true;

    this.id = null;
    this.name = null;
    this.imageUrl = null;
    this.price = null;

    this.phoneService.clearState();
  }

}
