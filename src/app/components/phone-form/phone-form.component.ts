import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  isNew: boolean = true;

  myFormGroup: FormGroup;

  constructor(private phoneService: PhoneService, private myFormBuilder: FormBuilder) { }

  ngOnInit(): void {

    // subscribe to the selectedPhone observable
    this.phoneService.selectedPhone.subscribe((phone) => {

      if (phone.id !== null) {

        // something was clicked
        this.isNew = false;

        this.initMyFormValues(phone.id, phone.name, phone.imageUrl, phone.price);
      }
    });

    this.clearState();
  }

  initMyValidation() {
    this.myFormGroup = this.myFormBuilder.group({
      id: [{ value: '', disabled: !this.isNew }, [Validators.required, Validators.minLength(1)]],
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6)
        ],
      ],
      imageUrl: '',
      price: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.maxLength(5),
          Validators.minLength(1)
        ],
      ],
    });
  }

  initMyFormValues(id: number, name: string, imageUrl: string, price: number) {

    this.myFormGroup?.setValue({
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price
    });
  }

  onSubmit() {

    if (this.isNew) {

      // add phone

      const newPhone: Phone = {
        id: this.myFormGroup.get('id').value,
        name: this.myFormGroup.get('name').value,
        imageUrl: 'assets/img/1.jpg',
        price: this.myFormGroup.get('price').value,
      };

      this.phoneService.addPhone(newPhone);

    } else {

      // update phone

      const updPhone: Phone = {
        id: this.myFormGroup.get('id').value,
        name: this.myFormGroup.get('name').value,
        imageUrl: this.myFormGroup.get('imageUrl').value,
        price: this.myFormGroup.get('price').value
      }

      this.phoneService.updatePhone(updPhone);
    }

    this.clearState();
  }

  clearState() {

    this.isNew = true;

    this.initMyFormValues(null, null, null, null);

    this.phoneService.clearState();

    // init again form
    this.initMyValidation();
  }


  validateId() {

    const input = this.myFormGroup.get('id');

    return ((input.touched || input.dirty) && input.hasError('required') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.hasError('minlength') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.valid ? 'is-valid' : '');
  }

  validateName() {

    const input = this.myFormGroup.get('name');

    return ((input.touched || input.dirty) && input.hasError('required') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.hasError('minlength') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.hasError('maxlength') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.valid ? 'is-valid' : '');
  }

  validatePrice() {

    const input = this.myFormGroup.get('price');

    return ((input.touched || input.dirty) && input.hasError('required') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.hasError('minlength') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.hasError('maxlength') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.hasError('pattern') ? 'is-invalid' : '')
      || ((input.touched || input.dirty) && input.valid ? 'is-valid' : '');
  }

  notValidName() {

    if (this.myFormGroup.get('name').hasError('minlength')) {
      console.log('Atribute \'Name\' ne moze biti manji od 6 karaktera!');
      return 'Min length is 6';
    } else {
      return '';
    }
  }


}
