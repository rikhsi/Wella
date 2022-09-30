import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  newOrder!: FormGroup;
  @Input() isVisible!: boolean;
  @Output() closeModal = new EventEmitter();
  @Output() showAlert = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.newOrder = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3)]],
      UserPhone: [null, [Validators.required]]
    });
  }

  submitForm(e: Event): void {
    if (this.newOrder.valid) {
      emailjs.sendForm('service_st0lwfs', 'template_5xrr7ha', e.target as HTMLFormElement, 'BfrhFFU6StfE7Pp7K');
      this.closeModal.emit();
      this.showAlert.emit();
      this.newOrder.reset();
    } else {
      Object.values(this.newOrder.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  modalCancel(): void {
    this.isVisible = !this.isVisible;
    this.closeModal.emit();
    this.newOrder.reset();
  }

  ngOnInit(): void { }
}
