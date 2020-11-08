import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public lobselection:FormGroup;
  ngOnInit() {
    this.lobselection = this.fb.group({
      lob:['']
    })
  }
  onSubmit(){
    console.log(this.lobselection.value);
  }
}


