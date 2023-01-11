import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpservicesService } from 'src/app/core/http/httpservices.service';
import { passwordmismatch } from 'src/app/Shared/customvalidators/custom';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  Signupform!: FormGroup;

  @Output() action: EventEmitter<string> = new EventEmitter();

  @Output() display: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private service: HttpservicesService) { }

  ngOnInit(): void {
    this.Signupform = this.fb.group(
      {
        username: ['', [Validators.required]],
        mobilenumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      }, { validators: passwordmismatch });
  }


  redirectosignup() {
    this.action.emit('signin');
    console.log('this is msg');
  }
  onclick() {
    let data = this.Signupform.value;
    console.log(data);
    this.service.postdata('users', data).subscribe(
      (el) => {
        console.log(el);

        this.display.emit(true);
        // .....this method bcz of if user completed the signup it redirect to the sign in page
      },
      (error) => {
        throw error;
      }
    );
  }

}
