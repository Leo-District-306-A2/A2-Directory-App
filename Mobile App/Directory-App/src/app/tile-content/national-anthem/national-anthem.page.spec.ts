import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NationalAnthemPage } from './national-anthem.page';

describe('NationalAnthemPage', () => {
  let component: NationalAnthemPage;
  let fixture: ComponentFixture<NationalAnthemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalAnthemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NationalAnthemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
