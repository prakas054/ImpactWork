import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  uid:string  = "";
  pwd:string  = "";
  result:string  = "";
  isButtonDisabled:boolean = false;
  count:number = 0;

  product:string = "";
  unitPrice:number = 0;
  quantity:number = 0;
  totalAmount:number = 0;

  loginButton_click()
  {
    if(this.uid == "admin"  &&  this.pwd  == "admin123")
    {
      this.result = "Welcome to Admin";
    }
    else
    {
      this.result = "Invalid user id or password";
      this.count = this.count  + 1;

      if(this.count == 3)
      {
        this.isButtonDisabled = true;
      }
    }
  }

  GetTotalButton_click()
  {
    this.totalAmount = this.unitPrice * this.quantity;

  }
}
