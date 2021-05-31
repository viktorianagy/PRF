import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Termekek } from '../interfaces/termekek';
import { TermekekComponent } from '../termekek/termekek.component';

@Component({
  selector: 'app-fizetes',
  templateUrl: './fizetes.component.html',
  styleUrls: ['./fizetes.component.css']
})
export class FizetesComponent implements OnInit {

  message = '';
  vasarlasmsg = '';
  kosar: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      console.log(params.keys);
      console.log(params.get('message'));
      this.message = params.get('id') + '  ' + params.get('message');
    }, error => {
      console.log('parammap error', error);
    })
   }

   vasarlas() {
      this.vasarlasmsg = 'A vásárlás sikeres volt.'
   }

   miVanAKosarban() {
     
   }

  ngOnInit(): void {
    let stringKosar: string[] = [];
    this.route.queryParamMap.subscribe(params => stringKosar = params.getAll('kosar'));
    this.kosar = JSON.parse(stringKosar[0]);
    console.log(this.kosar);
  }

}
