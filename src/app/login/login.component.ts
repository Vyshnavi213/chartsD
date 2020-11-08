import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public highlightColor = "purple";
  public name = "";
  public selectedClasses = {
    color: "blue",
    fontStyle: "italic"
  }
  public myId = "testId";
  public id = "classsel";
  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    console.log("GREETING");
    console.log(event);
  }

  logMessage(value) {
    console.log(value);
  }
  public show = true;

  public colors = ["red", "blue", "orange", "purple"];
}
