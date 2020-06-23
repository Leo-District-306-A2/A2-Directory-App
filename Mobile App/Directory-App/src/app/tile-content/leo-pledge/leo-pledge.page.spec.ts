import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeoPledgePage } from './leo-pledge.page';

describe('LeoPledgePage', () => {
  let component: LeoPledgePage;
  let fixture: ComponentFixture<LeoPledgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeoPledgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeoPledgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
