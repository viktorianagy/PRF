import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../utils/connection.service';
import { TermekService } from '../utils/termek.service';

interface Termekek {
  id: number;
  name: string;
  price: number
}

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private router: Router, private termekService: TermekService) {
  }

  title = 'WEBSHOP';

  termeklista: Termekek[] = [];

  k = true;

  goToFizetes() {
    this.router.navigate(['/fizetes', 'Webshop', {message: this.title}]);
  }

  termekListazas(){
    this.termekService.getAllTermek().subscribe((termek) => {
      this.termeklista = [];
      for(const i of termek) {
        this.termeklista.push(i);
      }
    if(this.k === false) {
      this.k = true;
    } else {
      this.k = false;
    }
    
    });
  }

  ngOnInit(): void {
    this.termekListazas();
  }

}
