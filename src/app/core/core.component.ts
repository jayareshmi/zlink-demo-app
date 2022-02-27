import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any = [];
  automaticFetchTimer: any;
  hasStartedAutoFetch = false;
  count = { greaterThan50: 0, male: 0, female: 0 };

  ngOnInit(): void {
  }

  fetchUser() {
    this.userService.fetchUser().subscribe(value => {
      const user = value.results[0];
      this.users.push(user);
      if (user.dob.age > 50) {
        this.count.greaterThan50++;
      }
      if (user.gender === 'male') {
        this.count.male++;
      } else if (user.gender === 'female') {
        this.count.female++;
      }
    })
  }

  doAutomaticFetch() {
    this.automaticFetchTimer = setInterval(() =>
      this.fetchUser(), 20000);
    this.hasStartedAutoFetch = true;
  }

  stopAutomaticFetch() {
    clearInterval(this.automaticFetchTimer);
    this.hasStartedAutoFetch = false;
  }

  clearUsers() {
    this.users = [];
    this.count.male = 0;
    this.count.female = 0;
    this.count.greaterThan50 = 0;
  }

}
