import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/api/auth.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  logIn!: FormGroup;
  logSub!: Subscription;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private main: MainService, private auth: AuthService, private router: Router) {
    this.logIn = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.logIn.valid) {
      this.loading = true;
      this.logSub = this.auth.login(this.logIn.value).subscribe({
        next: (data) => {
          this.auth.setToken(data.token)
          this.router.navigate(['/admin'])
          this.logIn.reset();
          this.loading = false;
        },
        error: () => {
          this.logIn.reset();
          this.loading = false;
        }
      })

    } else {
      Object.values(this.logIn.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin'])
    }
    setTimeout(() => {
      this.main.setPage(false);
    }, 10);
  }

}
