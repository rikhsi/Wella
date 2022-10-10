import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HandleLangService } from 'src/app/services/handle-lang.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [NzMessageService]
})
export class FormComponent implements OnInit {
  newOrder!: FormGroup;
  isAlertVisible: boolean = false;
  checked: boolean = true;

  constructor(private fb: FormBuilder,private msg: NzMessageService, private langService: HandleLangService) {
    this.newOrder = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3)]],
      userPhone: [null, [Validators.required]]
    });
  }

  check(): void {
    this.checked = !this.checked;
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible;
  }

  submitForm(e: Event): void {
    if(!this.checked){
      this.langService.message.subscribe(data => {
        if(data){
          this.msg.error('Дайте свое согласие на проверку конфиденциальности');
        } else{
          this.msg.error('Maxfiylik siyosatiga roziligingizni bering');
        }
      })
     
    }
    if (this.newOrder.valid && this.checked) {
      emailjs.sendForm('service_st0lwfs', 'template_5xrr7ha', e.target as HTMLFormElement, 'BfrhFFU6StfE7Pp7K');
      this.isAlertShow();
      this.newOrder.reset();
      this.check();
    } else {
      Object.values(this.newOrder.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
  }
}
