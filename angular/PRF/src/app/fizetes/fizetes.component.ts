import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fizetes',
  templateUrl: './fizetes.component.html',
  styleUrls: ['./fizetes.component.css']
})
export class FizetesComponent implements OnInit {

  message = '';
  vasarlasmsg = '';

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

  ngOnInit(): void {
  }

}
