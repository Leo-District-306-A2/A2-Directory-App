import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictPresidentLogoPage } from './district-president-logo.page';

describe('DistrictPresidentLogoPage', () => {
  let component: DistrictPresidentLogoPage;
  let fixture: ComponentFixture<DistrictPresidentLogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictPresidentLogoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictPresidentLogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
