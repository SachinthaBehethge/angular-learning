import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  imports: [FormsModule],
  templateUrl: './addpost.html',
  styleUrl: './addpost.scss'
})
export class Addpost {

  @Output() postTitleEmiter = new EventEmitter<string>();

  postTitle:string="";

addNewPost(){
  this.postTitleEmiter.emit(this.postTitle);
}
}
