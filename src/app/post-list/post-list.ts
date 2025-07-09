import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostListItem } from "../post-list-item/post-list-item";
import { FormsModule } from '@angular/forms';
import { User } from '../user/user';
import { Addpost } from "../addpost/addpost";

@Component({
  selector: 'app-post-list',
  imports: [PostListItem, FormsModule, User, Addpost],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList implements AfterViewInit {
  title:string = "Welcome to Post List";
  postTitle :string= ""
   posts : string[]=["post1","post2"];


  //  addNewPost(){
  //         this.posts.push(this.postTitle);
  //  }

   @ViewChild(User) userCom! : User;

   message:string="";

   constructor(){
    console.log(this.userCom);
    
   }
  ngAfterViewInit(): void {
        console.log(this.userCom);
        this.message=this.userCom.childMeassage;

  }


  //from child
  addNewPostFromChild(postTitle:string){
this.posts.push(postTitle);
  }

}
