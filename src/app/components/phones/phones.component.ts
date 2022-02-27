import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  phones: Phone[];

  @Input() phoneName: string; // for search (filter pipe)

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe((phones) => {
      this.phones = phones;
    });
  }
}
