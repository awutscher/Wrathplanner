import { NgTemplateOutlet } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CharacterfunctionService } from '../characterfunction.service';
import { Icharacters } from '../Icharacters';
import { Directive, ElementRef, Input, OnChanges, Sanitizer, SecurityContext,
  SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-characters-checklist',
  templateUrl: './characters-checklist.component.html',
  styleUrls: ['./characters-checklist.component.scss']
})
export class CharactersChecklistComponent implements OnInit {
  elementRef: any;
  
  constructor(
    public CharacterfunctionService: CharacterfunctionService,
  ) {
    var characters:any = this.CharacterfunctionService.allStorage()
    console.log(characters)
    console.log(Array.isArray(characters))
    characters = characters as Icharacters[]
  }

  
  ngonChange():void{
    /* var characters:any[] = this.CharacterfunctionService.allStorage();
    console.log(characters)
    let chars:Icharacters[] = characters
    console.log(characters) */
  }
  ngOnInit(): void {
    var characters = this.CharacterfunctionService.allStorage()
    console.log(characters)
    console.log(Array.isArray(characters))
    characters = characters as Icharacters[]
    /* console.log(chars) */
    /* console.log(typeof(characters)) */
    /* console.log(typeof(Object.entries(characters))) */
    /* console.log(typeof(chars)) */
  } 
}
