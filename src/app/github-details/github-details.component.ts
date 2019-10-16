import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user'
import { Repo } from '../classes/repos'
import { ServiceRequestService } from '../service-http/service-request.service'


@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',
  styleUrls: ['./github-details.component.css']
})
export class GithubDetailsComponent implements OnInit {

 
  searchUsers = true;
  user: User;
  repo: Repo;
  username: string;

  constructor(private service: ServiceRequestService) { }

  getProfile() {
    this.service.getUsername(this.username);

    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    console.log(this.repo);
  }
  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

  ngOnInit() {
    this.service.getUser();
    this.user = this.service.user;
}
}

