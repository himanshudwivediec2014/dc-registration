import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import {RegistrationRoutingModule} from "./registration-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2TelInputModule} from "ng2-tel-input";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    Ng2TelInputModule,
    SharedModule,
    FormsModule,
  ]
})
export class RegistrationModule { }
