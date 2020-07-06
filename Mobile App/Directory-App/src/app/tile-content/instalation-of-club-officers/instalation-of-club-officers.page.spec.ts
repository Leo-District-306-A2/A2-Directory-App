import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstalationOfClubOfficersPage } from './instalation-of-club-officers.page';

describe('InstalationOfClubOfficersPage', () => {
  let component: InstalationOfClubOfficersPage;
  let fixture: ComponentFixture<InstalationOfClubOfficersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalationOfClubOfficersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstalationOfClubOfficersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
