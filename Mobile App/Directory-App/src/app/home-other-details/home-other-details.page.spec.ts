import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeOtherDetailsPage } from './home-other-details.page';

describe('HomeOtherDetailsPage', () => {
  let component: HomeOtherDetailsPage;
  let fixture: ComponentFixture<HomeOtherDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOtherDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeOtherDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
