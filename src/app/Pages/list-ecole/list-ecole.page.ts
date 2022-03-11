import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-list-ecole',
  templateUrl: './list-ecole.page.html',
  styleUrls: ['./list-ecole.page.scss'],
})
export class ListEcolePage implements OnInit {

  search: any;
  liste: any;
  constructor(public service: ServicesService) { }

  ngOnInit() {
    this.listeEole();
  }

  listeEole(){
    return this.service.listeEcole().subscribe(donne =>{
      this.liste = donne;
      console.log(this.liste);
    });
  }
}
