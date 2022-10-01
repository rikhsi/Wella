import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService, headers } from 'src/app/services/api/auth.service';
import { MainService } from 'src/app/services/main.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [NzMessageService]
})
export class RegistrationComponent implements OnInit {
  logIn!: FormGroup;
  logSub!: Subscription;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private main: MainService, private auth: AuthService, private msg: NzMessageService, private router: Router) {
    this.logIn = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.logIn.valid) {
      this.loading = true;
      this.auth.login(this.logIn.value).subscribe({
        next: data => {
          this.auth.setToken(data.token);
          this.router.navigate(['admin'])
          this.loading = false;
        }, error: () => {
          this.loading = false;
          this.router.navigate(['/login'])
          this.msg.error('Неправильные данные');
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

  backHome(): void {
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
    this.router.navigate(['/admin'])
    setTimeout(() => {
      this.main.setPage(false);
    }, 10);
  }

}
