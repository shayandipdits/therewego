import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ContactUsService} from "../services/contact-us.service";
import Swal from "sweetalert2";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactUsForm: FormGroup;
  constructor(private contactUsService: ContactUsService){
    this.contactUsForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
  });
  }

  saveContactUs(){
    if(!this.contactUsForm.valid){
      this.contactUsForm.markAllAsTouched();
      return;
    }
    this.contactUsService.saveContactUs(this.contactUsForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'We will contact you',
          showConfirmButton: false,
          timer: 1500
        });
        this.contactUsForm.reset();
      }
    })
  }
}
