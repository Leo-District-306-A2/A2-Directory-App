import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PledgeOfAllegiancePage } from './pledge-of-allegiance.page';

describe('PledgeOfAllegiancePage', () => {
  let component: PledgeOfAllegiancePage;
  let fixture: ComponentFixture<PledgeOfAllegiancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeOfAllegiancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PledgeOfAllegiancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
