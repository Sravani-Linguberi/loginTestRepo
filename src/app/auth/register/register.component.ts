import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cities: string[] = [ "Hydrabad" ,  "Vizag" , "Chenni", "Bangulore" ]
  uName = new FormControl();
  password = new FormControl();
  // genderType = new FormControl();
  genderType: any
  registerForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      myUname : this.uName,
      pwd: this.password,
      // genderType : this.genderType,
      genderType : new FormControl(),
    })
  }

  onRegister() {
    console.log("hii");
    console.log(this.registerForm);

  }

  ngOnInit(): void {
  }

}
