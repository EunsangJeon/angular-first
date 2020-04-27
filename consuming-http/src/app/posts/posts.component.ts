import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response as any;
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    }
    input.value ='';
    this.service.postPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
          console.log(response)
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  updatePost(post) {
    // this.http.put(this.url, JSON.stringify(post));
    this.service.patchPost(post)
      .subscribe(
        response => {
          console.log(response);
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(404)
      .subscribe(
        response => {
          console.log(response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index ,1);
        },
        error => {
          console.log('error ', error);
          if(error.status === 404)
            alert("404");
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }
}
