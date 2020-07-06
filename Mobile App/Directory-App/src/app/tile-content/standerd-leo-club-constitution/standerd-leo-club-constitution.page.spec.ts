import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StanderdLeoClubConstitutionPage } from './standerd-leo-club-constitution.page';

describe('StanderdLeoClubConstitutionPage', () => {
  let component: StanderdLeoClubConstitutionPage;
  let fixture: ComponentFixture<StanderdLeoClubConstitutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanderdLeoClubConstitutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StanderdLeoClubConstitutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
