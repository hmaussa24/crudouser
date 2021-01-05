import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../interfaces/user';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: user = {
    name: null,
    apellido: null,
    email: null,
    telefono: null,
    direccion: null
  }
  id: any;
  editing: boolean = false;
  users: user[]
  constructor(private userServise: UsersService, private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true
      this.userServise.get().subscribe((data: user[]) => {
        this.users = data;
        this.user = this.users.find((u) => { return u.id == this.id })
      })
    } else {
      this.editing = false
    }

  }

  ngOnInit(): void {
  }
  saveUser() {
    if (this.editing) {
      this.userServise.put(this.user).subscribe((data) => {
        alert('usuario actualizad')
        console.log(data)
      }, (error) => {
        console.log(error)
        alert("USUARIO NO ACTUALIZADO")
      })
    } else {
      this.userServise.save(this.user).subscribe((data) => {
        alert('usuario guardado')
        console.log(data)
      }, (error) => {
        console.log(error)
        alert("USUARIO NO GUARDADO")
      })
    }

  }
}
