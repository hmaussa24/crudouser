import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/user';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: user[]
  constructor(private usersService: UsersService) {
    this.usersService.get().subscribe((data: user[]) => {
      this.users = data;
    }, (error) => {
      console.log(error)

    })
  }

  ngOnInit(): void {
  }

  delete(id) {
    this.usersService.delete(id).subscribe((data) => {
      alert("Eliminado exitoso")
      this.usersService.get().subscribe((data: user[]) => {
        this.users = data;
      }, (error) => {
        console.log(error)

      })
    }), (error) => {
      console.log(error)
      alert("Error")
    }
  }

}
