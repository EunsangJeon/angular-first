import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // if parameter will never change you can consider:
    // this.route.snapshot.paramMap

    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log(id);
      })
  }

  submit() {
    this.router.navigate(['/followers', {
      queryParams: { page: 1, order: 'newest'}
    }]);
  }
}
