import { Component, Input, input } from '@angular/core';
import { PostList } from "../post-list/post-list";

@Component({
  selector: 'app-post-list-item',
  imports: [PostList],
  templateUrl: './post-list-item.html',
  styleUrl: './post-list-item.scss'
})
export class PostListItem {
  @Input() post1:string=""
}


