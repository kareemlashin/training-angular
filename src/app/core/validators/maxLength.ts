import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function maxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const isValid = !value || value.length <= maxLength;
    return isValid ? null : { maxLength: { maxLength: maxLength, actualLength: value ? value.length : 0 } };
  };
}