import { STRING_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Icharacters } from 'src/app/Icharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterfunctionService {

  constructor(
  ) {}

  newChar(){
    var output = "placeholder"
    var input = prompt("please insert Charactername")
    if(typeof input !== "string"){
      return;
    }
    else{
    let newCharName:string = input
    localStorage.setItem(newCharName,JSON.stringify({name:newCharName,naxxramas10:true,naxxramas25:false,os10:false,os25:false,eoe10:false,eoe25:false,ulduar10:false,ulduar25:false}))
    }
    /* if(localStorage.getItem("Palaqt") !== "string"){ // Testing Part
    return}
    else()=>{
      let output = localStorage.getItem("Palaqt")
    return output}
    let parseOutput = JSON.parse(output)
    console.log(parseOutput) */
  } 

  change(charname:any, instance:any){
    let charToChange = localStorage.getItem(charname)!
    /* console.log(instance) */
    /* console.log(charToChange?.includes('{{instance:true}}') == false) */
    /* console.log(charname) */
    console.log(charToChange)
    /* console.log(typeof(charToChange)) */
    if(charToChange.includes('{{instance:true}}') == false){
      charToChange.replace('"{{instance}}":true', '"{{instance}}":false')
      /* console.log(charToChange) */
      localStorage.removeItem(charname)
      console.log(charname + "if")
      localStorage.setItem("test2", charToChange)
    }
    else{
      charToChange.replace('"{{instance}}":false', '"{{instance}}":true')
      /* console.log("changed to true") */
      /* console.log(charToChange) */
      localStorage.removeItem(charname)
      console.log(charname + "else")
      localStorage.setItem("test2", charToChange)
    }
    /* localStorage.removeItem(charname)
    localStorage.setItem("test2", charToChange!) */
    
  }

  allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        let tempValue:any = localStorage.getItem(keys[i])
        let tempParsedValue = JSON.parse(tempValue)
        values.push(tempParsedValue);
    }
    console.log(values)
    return values;
  }

  clearStorage(){
    localStorage.clear();
  }

  ngOnInit(): void {
  }
}
