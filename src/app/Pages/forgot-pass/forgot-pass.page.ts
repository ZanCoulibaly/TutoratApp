import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  mode=1;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  envoyer(){
    this.mode=2;
  }
  valider(){
   this.mode=3;
 }
 btnOK(){
   this.route.navigate(['login']);
 }
}
