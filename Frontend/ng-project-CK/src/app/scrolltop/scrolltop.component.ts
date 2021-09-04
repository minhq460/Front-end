import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.scss']
})
export class ScrolltopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.functiontop();
  }
  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
  functiontop() {
    var mybutton = document.getElementById("scrollUp");

    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

          if (mybutton === null) {
              alert('oops');
          } else {
              mybutton.nodeName;
              mybutton.style.display = "block";
          }
        } else {
          if (mybutton === null) {
            alert('oops');
        } else {
            mybutton.nodeName;
            mybutton.style.display = "none";
        }
        }
    }
  }



}
