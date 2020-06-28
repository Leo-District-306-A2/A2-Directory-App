import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitialSliderPage } from './initial-slider.page';

describe('InitialSliderPage', () => {
  let component: InitialSliderPage;
  let fixture: ComponentFixture<InitialSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
