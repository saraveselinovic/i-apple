import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PhonesComponent } from './components/phones/phones.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { PhoneSearchComponent } from './components/phone-search/phone-search.component';
import { PhoneAddComponent } from './components/phone-add/phone-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PhonesComponent,
    PhoneFormComponent,
    FilterPipePipe,
    PhoneSearchComponent,
    PhoneAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
