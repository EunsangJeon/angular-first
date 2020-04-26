import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{  
        if((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // to simulate server latency
            setTimeout(() => {
                if(control.value === 'nick'){
                    console.log('name is nick');
                    resolve({ shouldBeUnique: true});   
                }
                else {
                    console.log('name is not nick');
                    resolve(null);
                }
            }, 2000);
        });
    }
}