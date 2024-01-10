import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>This is the blog page</h1>

    <a routerLink="/post">Read the first post!</a>
  `,
  styles: [``],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
