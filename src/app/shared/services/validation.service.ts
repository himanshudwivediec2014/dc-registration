import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

// @Injectable({
//   providedIn: 'root'
// })
export class ValidationService {

  static matchControls(controlName: string, matchingControlName: string) {
    return (form: FormGroup) => {
      const control = form.controls[controlName];
      const matchingControl = form.controls[matchingControlName];

      if (!control.value && !matchingControl.value) {
        return;
      }

      if (matchingControl.errors && !matchingControl.errors?.valueMismatch) {
        return;
      }

      if (
        control.value && matchingControl.value
        && control.value !== matchingControl.value
      ) {
        matchingControl.setErrors({ valueMismatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
