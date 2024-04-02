import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule, MatInputModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  courseForm: FormGroup;
  constructor(){
    this.courseForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
  });
  }
}
