import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleCouncilChairmanPage } from './multiple-council-chairman.page';

describe('MultipleCouncilChairmanPage', () => {
  let component: MultipleCouncilChairmanPage;
  let fixture: ComponentFixture<MultipleCouncilChairmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleCouncilChairmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleCouncilChairmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
