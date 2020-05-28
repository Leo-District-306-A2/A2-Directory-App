import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadOfficersPage } from './head-officers.page';

describe('HeadOfficersPage', () => {
  let component: HeadOfficersPage;
  let fixture: ComponentFixture<HeadOfficersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOfficersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadOfficersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
