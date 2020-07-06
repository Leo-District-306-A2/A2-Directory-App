import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditorsNotePage } from './editors-note.page';

describe('EditorsNotePage', () => {
  let component: EditorsNotePage;
  let fixture: ComponentFixture<EditorsNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorsNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditorsNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
