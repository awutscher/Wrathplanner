import { NgModule } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import { asNativeElements, Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CharacterfunctionService } from '../characterfunction.service';
import { Directive, ElementRef, Input, OnChanges, Sanitizer, SecurityContext,
  SimpleChanges } from '@angular/core';
import { Icharacters } from '../Icharacters';




@Component({
  selector: 'app-characters-checklist',
  templateUrl: './characters-checklist.component.html',
  styleUrls: ['./characters-checklist.component.scss']
})


export class CharactersChecklistComponent implements OnInit {
  characters:any = [];
  
  constructor(
    public CharacterfunctionService: CharacterfunctionService,
  ) {}

  ngOnInit(): void {
    this.characters = this.CharacterfunctionService.allStorage()
    /* console.log(Array.isArray(this.characters))
    console.log(this.characters) */
    /* console.log(this.characters[0].name)
    console.log(this.characters[0].naxxramas10) */
  } 
}
