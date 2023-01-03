import { Injectable } from '@angular/core';
import { Icharacters } from 'src/app/Icharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterfunctionService {

  constructor(
  ) {
    /* var characters = [{name:"Palaqt","Naxxramas":true,"OS":false},
                      {name:"Opelcorsa","Naxxramas":true,"OS":true}];
    localStorage.setItem("characters",JSON.stringify(characters));
    let getFromStorage = localStorage.getItem("characters")
    console.log(JSON.parse(getFromStorage!)); */
   }
    /* changeChecked(){
    if(localStorage.getItem("placeholderID"):"Naxxramas" = true)
  } */

  newChar(){

  }

  ngOnInit(): void {
    /* localStorage.setItem("Palaqt",JSON.stringify({"Palaqt":["Naxxramas",true]})) */ //working
    /* console.log(JSON.stringify({"Palaqt":["Naxxramas",true]})) */
    localStorage.clear();
    /* let characters = [{name:"Palaqt","Naxxramas":true,"OS":false},
                      {name:"Opelcorsa","Naxxramas":true,"OS":true}];
    localStorage.setItem("characters",JSON.stringify(characters));
    let getFromStorage = JSON.parse(localStorage.getItem("characters"))
    console.log(getFromStorage); */
  }
}
