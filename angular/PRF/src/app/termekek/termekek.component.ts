import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private router: Router) {
    console.log(environment);
  }

  title = 'WEBSHOP';

  goToFizetes() {
    this.router.navigate(['/fizetes', 'Webshop', {message: this.title}]);
  }

  hello() {
		console.log('Hello!');
    this.connectionService.greet().subscribe(data => {
      console.log('This came from the server: ', data);
    }, error => {
      console.log('Sorry, we encountered an error: ', error);
    });
	}

  ngOnInit(): void {
  }

}
