import { STRING_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Icharacters } from 'src/app/Icharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterfunctionService {

  constructor(
  ) {}
    /* changeChecked(){
    if(localStorage.getItem("placeholderID"):"Naxxramas" = true)
  } */

  newChar(){
    var output = "placeholder"
    var input = prompt("please insert Charactername")
    if(typeof input !== "string"){
      return;
    }
    else{
    let newCharName:string = input
    localStorage.setItem(newCharName,JSON.stringify({name:newCharName,Naxxramas10:false,naxxramas25:false,os10:false,os25:false,eoe10:false,eoe25:false,ulduar10:false,ulduar25:false}))
    }
    /* if(localStorage.getItem("Palaqt") !== "string"){ // Testing Part
    return}
    else()=>{
      let output = localStorage.getItem("Palaqt")
    return output}
    let parseOutput = JSON.parse(output)
    console.log(parseOutput) */
  } 

  allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
      //parse each value individually and then push em into value array
        let tempValue:any = localStorage.getItem(keys[i])
        let tempParsedValue = JSON.parse(tempValue) // returns objects in object?
        /* let tempParsedValue = tempValue // returns strings in object?  */
        values.push(tempParsedValue);
    }
    //returns object :(  /
    console.log(values)
    return values;
  }

  ngOnInit(): void {
  }
}
