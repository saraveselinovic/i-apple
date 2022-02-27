import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phones: Phone[];

  @Input() phoneName: string; // for search (filter pipe)

  selectedPhone: Phone; // for populating form

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {

    // for clear
    this.phoneService.stateClear.subscribe((clear) => {
      if (clear) {
        this.selectedPhone = { id: null, name: null, imageUrl: null, price: null };
      }
    });

    this.phoneService.getPhones().subscribe((phones) => {
      this.phones = phones;
    });

  }

  onSelect(phone: Phone) {

    this.phoneService.setFormPhone(phone);
    this.selectedPhone = phone;
  }

  onDelete(phone: Phone) {

    if (confirm('Are you sure?')) {

      this.phoneService.deletePhone(phone);
    }
  }

}
