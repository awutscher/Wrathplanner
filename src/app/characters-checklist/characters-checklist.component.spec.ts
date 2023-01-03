import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersChecklistComponent } from './characters-checklist.component';

describe('CharactersChecklistComponent', () => {
  let component: CharactersChecklistComponent;
  let fixture: ComponentFixture<CharactersChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
