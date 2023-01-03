import { STRING_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Icharacters } from 'src/app/Icharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterfunctionService {

  constructor(
  ) {
   }
    /* changeChecked(){
    if(localStorage.getItem("placeholderID"):"Naxxramas" = true)
  } */

  newChar(){
    var output = "placeholder"
    var input = prompt("please insert Charname")
    if(typeof input !== "string"){
      return;
    }
    else{
    let newCharName:string = input
    localStorage.setItem(newCharName,JSON.stringify({name:newCharName,"Naxxramas10":true,"os":false}))
    }
    if(localStorage.getItem("Palaqt") !== "string"){ // Testing Part
    return}
    else()=>{
      let output = localStorage.getItem("Palaqt")
    return output}
    let parseOutput = JSON.parse(output)
    console.log(parseOutput)
  } 

  allStorage() { // returns all chars as objects (next parse through interface and output in html)
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    /* return values */
    console.log(values)
  }


  ngOnInit(): void {
  }
}
