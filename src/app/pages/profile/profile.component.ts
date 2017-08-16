/**
 * Created by sagar on 3/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})

export class ProfileComponent implements OnInit {
  public max:number = 10;
  public rate:number = 9;
  public isReadonly:boolean = false;
  public isPercent:boolean = true;
  bindData : any;

  constructor() {
    this.bindData ={
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Buck Kulkarni",
            "name_official": "Buck Kulkarni",
            "profile": "buck.jpg",
            "email" : "buck.kulkarni@metamagic.in"
          },
          {
            "name": "Araf Karsh Hamid",
            "name_official": "Araf Karsh Hamid",
            "profile": "karsh.jpg",
            "email" : "araf.karsh@metamagic.in"
          },
          {
            "name": "ketan Gote",
            "name_official": "Ketan Gote",
            "profile": "ketan.jpg",
            "email" : "ketan.gote@metamagic.in"
          },
          {
            "name": "Pratik Kelwalkar",
            "name_official": "Pratik Kelwalkar",
            "profile": "pratik.jpg",
            "email" : "pratik.kelwalkar@metamagic.in"
          },
          {
            "name": "Dattaram Gawas",
            "name_official": "Dattaram Gawas",
            "profile": "dats.jpg",
            "email" : "dattaram.gawas@metamagic.in"
          },
          {
            "name": "Sagar Jadhav",
            "name_official": "Sagar Jadhav",
            "profile": "sagar.jpg",
            "email" : "sagar.jadhav@metamagic.in"
          },
          {
            "name": "Mahesh Pardeshi",
            "name_official": "Mahesh Pardeshi",
            "profile": "mahesh.jpg",
            "email" : "mahesh.pardeshi@metamagic.in"
          },
          {
            "name": "Ashutosh Jadhav",
            "name_official": "Ashutosh Jadhav",
            "profile": "ahutosh.jpg",
            "email" : "ashutosh.jadhav@metamagic.in"
          },
          {
            "name": "Anagha Kulkarni",
            "name_official": "Anagha Kulkarni",
            "profile": "anagha.jpg",
            "email" : "anagha.kulkarni@metamagic.in"
          },
          {
            "name": "Amruta Abhyankar",
            "name_official": "Amruta Abhyankar",
            "profile": "amruta.jpg",
            "email" : "amruta.abhyankar@metamagic.in"
          },
          {
            "name": "Rashmi Thakkar",
            "name_official": "Rashmi Thakkar",
            "profile": "rashmi.jpg",
            "email" : "rashmi.thakkar@metamagic.in"
          },
          {
            "name": "Deepali Arvind",
            "name_official": "Deepali Arvind",
            "profile": "dipali.jpg",
            "email" : "deepali.arvind@metamagic.in"
          },
          {
            "name": "Ashwini Agre",
            "name_official": "Ashwini Agre",
            "profile": "ashwini.jpg",
            "email" : "ashwini.agre@metamagic.in"
          }
        ]
      }
    };
  }
  ngOnInit() { }
}
