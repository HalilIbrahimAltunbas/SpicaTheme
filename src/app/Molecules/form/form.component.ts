import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormInputModel } from '../../Models/Particules/FormInput/InputModel';
import { FormGroup, FormsModule } from '@angular/forms';
import { InputComponent } from '../../Particules/input/input.component';
import { ButtonComponent } from '../../Particules/button/button.component';
import { CommonModule } from '@angular/common';
import { ButtonModel, buttonStyles } from '../../Models/Particules/Button/ButtonModel';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent,ButtonComponent,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnChanges {
  group: FormGroup = new FormGroup({})
  @Input() fields: FormInputModel[] = []
  
  router:Router
  constructor(router :Router) {
    this.router = router
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      if(changes) {
        for(let item of this.fields){
          this.group.addControl(item.Name,item.Control)
        }
        console.log("run")
      }
  }
  buttonModel=new ButtonModel({class: buttonStyles.success,
    text:"Submit",
    type:"submit",
    disabled: this.group.valid})

  test(){
    console.log(this.group)
    this.router.navigateByUrl("/dashboard")
  }
}
