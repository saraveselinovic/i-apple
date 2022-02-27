import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {

  @Input() phone: Phone;
  @Input() isNew: boolean = true;
  @Output() onAction: EventEmitter<Phone> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.isNew) {

      // add phone

      this.onAction.emit({
        id: this.phone.id,
        name: this.phone.name,
        imageUrl: 'assets/img/1.jpg',
        price: this.phone.price
      });

    } else {

      // update phone

      this.onAction.emit({
        id: this.phone.id,
        name: this.phone.name,
        imageUrl: 'assets/img/1.jpg',
        price: this.phone.price
      });
    }

  }

}
