import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictPresidentPage } from './district-president.page';

describe('DistrictPresidentPage', () => {
  let component: DistrictPresidentPage;
  let fixture: ComponentFixture<DistrictPresidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictPresidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictPresidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
