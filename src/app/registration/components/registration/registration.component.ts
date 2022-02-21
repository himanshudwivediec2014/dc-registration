import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CURRENCIES } from "../../../shared/constants/world-currencies";
import { COUNTRY_CODES } from "../../../shared/constants/country-codes";
import { CountryCodeModel } from "../../../shared/models/country-code.model";
import { CurrencyModel } from "../../../shared/models/currency.model";
import { ValidationService } from "../../../shared/services/validation.service";
import { GENDERS } from "../../../shared/constants/genders";
import { GendersModel } from "../../../shared/models/genders.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public languages: any[] = [];

  public registrationForm: FormGroup;
  public currencies: CurrencyModel[] = CURRENCIES;
  public selectedCurrency: string = CURRENCIES[0].cc;
  public countryCodes: CountryCodeModel[] = COUNTRY_CODES;
  public gendersList: GendersModel[] = GENDERS;
  public selectedCountryCode: string = '';
  public isPasswordVisible: boolean = false;
  public isConfirmPasswordVisible: boolean = false;
  public isAgreed: boolean = false;
  public imageUrl: string = '';

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = <FormGroup>{};
  }

  ngOnInit(): void {
    this.initialiseForm();
  }

  private initialiseForm(): void {
    this.registrationForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]],
      profilePicture: [null, []],
      gender: ['', [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      address: [null, []],
      hobbies: [null, []],
      income: [null, []]
    }, {
      validator: ValidationService.matchControls('password', 'confirmPassword')
    });
  }

  setImagePreview(event: any) {
    // @ts-ignore
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.registrationForm.patchValue({
        profilePicture: reader.result
      });
      // @ts-ignore
      this.registrationForm.get('profilePicture').updateValueAndValidity();
    }
  }

  setIsAgreed(elem: any) {
    this.isAgreed = elem.checked;
  }

  setSelectedCurrency(event: any) {
    this.selectedCurrency = event.target.value;
  }

  submitDetails() {
    console.log(this.registrationForm.value);
  }

}
