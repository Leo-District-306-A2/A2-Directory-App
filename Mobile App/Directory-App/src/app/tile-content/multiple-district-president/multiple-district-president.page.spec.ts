import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleDistrictPresidentPage } from './multiple-district-president.page';

describe('MultipleDistrictPresidentPage', () => {
  let component: MultipleDistrictPresidentPage;
  let fixture: ComponentFixture<MultipleDistrictPresidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleDistrictPresidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleDistrictPresidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
