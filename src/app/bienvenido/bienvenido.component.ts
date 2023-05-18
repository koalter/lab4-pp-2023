import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  userData: any;

  constructor(private githubService: GithubService) {}    

  ngOnInit(): void {
      this.githubService.getUserData()
        .subscribe(res => this.userData = res);
  }
}
