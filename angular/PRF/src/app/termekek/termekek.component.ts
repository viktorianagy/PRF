import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Termekek } from '../interfaces/termekek';
import { ConnectionService } from '../utils/connection.service';
import { TermekService } from '../utils/termek.service';



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
  @Output() newKosar = new EventEmitter<any>();
  kosar: Termekek[] = [];

  kosarTratalom() {
    this.newKosar.emit(this.kosar);
  }



  k = true;

  kosarba(i: Termekek) {
    this.kosar.push(i);
    console.log(i);
    
  }

  goToFizetes() {
    this.router.navigate(['/fizetes', 'Webshop', {message: this.title}], { queryParams: { kosar: JSON.stringify(this.kosar) } });
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
