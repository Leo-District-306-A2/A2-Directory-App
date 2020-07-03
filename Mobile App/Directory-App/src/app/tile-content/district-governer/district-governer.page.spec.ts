import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictGovernerPage } from './district-governer.page';

describe('DistrictGovernerPage', () => {
  let component: DistrictGovernerPage;
  let fixture: ComponentFixture<DistrictGovernerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictGovernerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictGovernerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
