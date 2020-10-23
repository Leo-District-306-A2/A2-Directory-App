import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestIntroductionsPage } from './guest-introductions.page';

describe('GuestIntroductionsPage', () => {
  let component: GuestIntroductionsPage;
  let fixture: ComponentFixture<GuestIntroductionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestIntroductionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestIntroductionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
