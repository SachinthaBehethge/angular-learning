import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
childMeassage:string = "Hello Daddy"; 
userName:string="Saman";
private salary:number=350000;
}
