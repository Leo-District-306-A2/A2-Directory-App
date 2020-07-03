import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictChairmanPage } from './district-chairman.page';

describe('DistrictChairmanPage', () => {
  let component: DistrictChairmanPage;
  let fixture: ComponentFixture<DistrictChairmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictChairmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictChairmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
