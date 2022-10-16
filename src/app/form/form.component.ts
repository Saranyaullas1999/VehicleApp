import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  year=""
  model=""
  vin=""
  owner=""
  address=""
  pincode=""
  phone=""

  readValue=()=>{
    let data={
      "year":this.year,
      "model":this.model,
      "vin":this.vin,
      "owner":this.owner,
      "address":this.address,
      "pincode":this.pincode,
      "phone":this.phone
    }
    console.log(data)
    alert("Successfully added")
    this.year=""
    this.model=""
    this.vin=""
    this.owner=""
    this.address=""
    this.pincode=""
    this.phone=""
  }

  ngOnInit(): void {
  }

}
