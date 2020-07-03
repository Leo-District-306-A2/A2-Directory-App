import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictVicePresidentPage } from './district-vice-president.page';

describe('DistrictVicePresidentPage', () => {
  let component: DistrictVicePresidentPage;
  let fixture: ComponentFixture<DistrictVicePresidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictVicePresidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictVicePresidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
