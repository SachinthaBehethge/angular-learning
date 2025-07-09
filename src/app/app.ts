import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHighlight } from './directives/app-highlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppHighlight],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name: string = "Test App";
  isLoggedIn : boolean = true;
  marks : Mark[] = [{name:"Saman",mark:10},{name:"Piyal", mark:50},{name:"Sandun", mark:50},{name:"Liyal", mark:70},{name:"Kamal", mark:90} ];



isContentVisible:boolean = false;

role:string= "Editor";

  toggleIt(){
    this.isContentVisible = !this.isContentVisible;
  }

  nestedItems :{category:string, items:string[]} [] = [
    {category:"Fruits",items:["Mango", "Banana", "Graphes"]},
    {category:"Animals", items:["Dog","Cat", "Tiger"]}
  ]


}

  interface Mark{
    name:string,
    mark: number,
  }
