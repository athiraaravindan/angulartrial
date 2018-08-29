import { FormGroup } from '@angular/forms';
 
export class RegistrationValidator {
    static validate(registrationFormGroup: FormGroup) {
        let password = registrationFormGroup.controls.password.value;
        let cpassword = registrationFormGroup.controls.cpassword.value;
 
        if (cpassword.length <= 0) {
            return null;
        }
 
        if (cpassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }
}