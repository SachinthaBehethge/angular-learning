import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector:'app-menu',
    standalone:true,
    templateUrl:'menu.component.html',
    styleUrl:'menu.component.scss',
    imports:[FormsModule],
})


export class Menu {
 title: string = "Menu Bar";
 imageUrl : String= 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
 areaLabel : String = 'this is open this';
 colspan =2;
 color:string= 'green';
 isActive:boolean = true;


 message = "";
 updateMessage(){
    this.message="Here is the message"
 }


 keyDown(event:KeyboardEvent){
    if (event.key == "h") {
        alert("Successfully press the H");
    }
 }

 name: string= '';
 showName(ref: HTMLInputElement){
        this.name = ref.value;
 }


//  two way
district ='';
}