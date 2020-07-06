import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitiationOfNewMembersPage } from './initiation-of-new-members.page';

describe('InitiationOfNewMembersPage', () => {
  let component: InitiationOfNewMembersPage;
  let fixture: ComponentFixture<InitiationOfNewMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiationOfNewMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitiationOfNewMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
