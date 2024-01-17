import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl} from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { AccountService } from 'src/app/services/account.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // @Input() isAdmin: boolean = false;
  // @Input() isUpdate: boolean = false;
  // @Output() changeRouteEvent = new EventEmitter<void>();
  // @Output() updateSuccess = new EventEmitter<void>();
  
  
  
    account = this.accountService.accountValue!;
    form!: FormGroup;
    submitting = false;
    submitted = false;
    hidePassword = true; 
    hideConfirmPassword=true;
    deleting = false;
  
  
    togglePassword() {
      this.hidePassword = !this.hidePassword;
    }
    toggleConfirmPassword() {
      this.hideConfirmPassword = !this.hideConfirmPassword;
    }
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService
        // private alertService: AlertService
    ) { }
  
    noSpecialChars(control: AbstractControl) {
      const pattern = /^[a-zA-Z0-9]*$/; // Regular expression to allow only alphanumeric characters
      if (!pattern.test(control.value)) {
        return { specialChars: true };
      }
      return null;
    }
    
    ngOnInit() {
      this.form = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', [Validators.required, this.noSpecialChars]],
        lastName: ['', [Validators.required, this.noSpecialChars]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: ['', Validators.requiredTrue] 
  
      }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    
      //Used for the edit and profile update logic
      // if (this.isUpdate) {
      //   this.form.patchValue({
      //     title: this.account.title,
      //     firstName: this.account.firstName,
      //     lastName: this.account.lastName,
      //     email: this.account.email,
  
      //   });
      // }
    
    //   if (this.isAdmin && !this.isUpdate) {
    //     this.form.addControl('role', new FormControl('', Validators.required));
    //   }
  
     }
  
    
  
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
  
    onSubmit() {
      this.submitted = true;
  
      console.log(this.form.value)
      // console.log('isAdmin:', this.isAdmin);
      // console.log('isUpdate:', this.isUpdate);
     
        // reset alerts on submit
        // this.alertService.clear();
  
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
  
        this.submitting = true;
        // if(this.isUpdate){
        // this.accountService.update(this.account.id!, this.form.value)
        // this.submitted=true;
        // this.updateSuccess.emit();
      // }
      //   else{
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['../login'], { relativeTo: this.route });
  
                },
                error: error => {
                    this.submitting = false;
                }
            });   
          }  
    }
  
