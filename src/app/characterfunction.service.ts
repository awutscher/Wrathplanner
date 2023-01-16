import { STRING_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Icharacters } from 'src/app/Icharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterfunctionService {

  constructor(
  ) {}

  newChar(){ // store each char as storage entry  Method 1 
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

  newWowChar(){ // store all chars in one storage entry  Method 2 
    var input = prompt("please insert Charactername")
    let newCharName:string = input!
    if(typeof input !== "string"){
      return;
    }
    else if(localStorage.getItem("wowChars") === null){
    localStorage.setItem("wowChars",JSON.stringify([{name:newCharName,naxxramas10:true,naxxramas25:false,os10:false,os25:false,eoe10:false,eoe25:false,ulduar10:false,ulduar25:false}]))
    let storage = localStorage.getItem("wowChars")
    let wowChars = JSON.parse(storage!)
  }
    else if(localStorage.getItem("wowChars") !== null){
      let storage = localStorage.getItem("wowChars")
      let wowChars = JSON.parse(storage!)
      /* console.log(Array.isArray(wowChars)) */ // true
      /* console.log(wowChars) */
      localStorage.removeItem("wowChars")
      let additive = {name:newCharName,naxxramas10:true,naxxramas25:false,os10:false,os25:false,eoe10:false,eoe25:false,ulduar10:false,ulduar25:false}
      wowChars.push(additive)
      localStorage.setItem("wowChars", JSON.stringify(wowChars))
    }
  } 

  test(){
    if(localStorage.getItem("wowChars") === null){
      console.log("noitem")
    }
    else{
      console.log(localStorage.getItem("wowChars"));
    }
  }

  change(i:number, instance:any){

    let storage = localStorage.getItem("wowChars")
    let wowChars:any = JSON.parse(storage!)
    /* console.log(wowChars) */
    if(wowChars[i].instance = true){
      wowChars[i].instance = false
      console.log(wowChars[i].instance)
      console.log(wowChars)
      localStorage.removeItem("wowChars");
      localStorage.setItem("wowChars", JSON.stringify(wowChars))
    }
    else{
      wowChars[i].instance = true
      /* console.log(wowChars[i].instance) */
      localStorage.removeItem("wowChars");
      localStorage.setItem("wowChars", JSON.stringify(wowChars))
      return;
    }
    
  }

  allStorage() { // part of storage version 1
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
