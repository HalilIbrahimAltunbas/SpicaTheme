import { Component } from '@angular/core';
import { FormInputModel, FormInputTypes } from '../../Models/Particules/FormInput/InputModel';
import { FormControl, Validators } from '@angular/forms';
import { ButtonModel } from '../../Models/Particules/Button/ButtonModel';
import { ButtonComponent } from '../../Particules/button/button.component';
import { FormComponent } from '../../Molecules/form/form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ButtonComponent, FormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  InputFields: FormInputModel[] = [
    {
      type: FormInputTypes.email,
      class: 'form-control',
      Name: 'E-mail',
      placeholder: 'example@example.com',
      Control: new FormControl('', [Validators.email, Validators.required]),
    },
    {
      type: FormInputTypes.password,
      class: 'form-control',
      Name: 'Password',
      placeholder: 'Password',
      Control: new FormControl('', [Validators.required]),
    },
  ];
  buttons: ButtonModel[] = [
    {
      class: 'btn ',
      type: '',
      text: '',
      disabled: false,
      icon: '../../../assets/icons8-google.svg',
    },
    {
      class: 'btn ',
      type: '',
      text: '',
      disabled: false,
      icon: '../../../assets/icons8-facebook.svg',
    },
    {
      class: 'btn ',
      type: '',
      text: '',
      disabled: false,
      icon: '../../../assets/icons8-discord.svg',
    },
  ];
}
