import { AbstractControl , ValidationErrors } from "@angular/forms"


export function passwordmismatch (control:AbstractControl):ValidationErrors | null{

    let password = control.get ('password')?.value
    let  confirmPassword =control.get ('confirmPassword')?.value

    if (password !=confirmPassword){
        return {'passwordmismatch' :true}
    }
    return null 
} 