import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImmediatPastDistrictPresidentPage } from './immediat-past-district-president.page';

describe('ImmediatPastDistrictPresidentPage', () => {
  let component: ImmediatPastDistrictPresidentPage;
  let fixture: ComponentFixture<ImmediatPastDistrictPresidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediatPastDistrictPresidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImmediatPastDistrictPresidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
