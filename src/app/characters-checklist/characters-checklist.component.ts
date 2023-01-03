import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CharacterfunctionService } from '../characterfunction.service';



@Component({
  selector: 'app-characters-checklist',
  templateUrl: './characters-checklist.component.html',
  styleUrls: ['./characters-checklist.component.scss']
})
export class CharactersChecklistComponent implements OnInit {

  constructor(
    public CharacterfunctionService: CharacterfunctionService,
  ) { }
  

  ngOnInit(): void {
  }
}
