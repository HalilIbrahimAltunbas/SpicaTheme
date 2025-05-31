import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ButtonComponent } from '../../Particules/button/button.component';
import {
  FormInputModel,
  FormInputTypes,
} from '../../Models/Particules/FormInput/InputModel';
import { FormComponent } from '../../Molecules/form/form.component';
import { ButtonModel } from '../../Models/Particules/Button/ButtonModel';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ButtonComponent, FormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  // InputModel: FormInputModel =PasswordInputModel: FormInputModel =
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
