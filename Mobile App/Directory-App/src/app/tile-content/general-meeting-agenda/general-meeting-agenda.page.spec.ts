import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralMeetingAgendaPage } from './general-meeting-agenda.page';

describe('GeneralMeetingAgendaPage', () => {
  let component: GeneralMeetingAgendaPage;
  let fixture: ComponentFixture<GeneralMeetingAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMeetingAgendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralMeetingAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
