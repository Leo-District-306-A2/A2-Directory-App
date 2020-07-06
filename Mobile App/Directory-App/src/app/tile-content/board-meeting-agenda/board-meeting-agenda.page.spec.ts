import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardMeetingAgendaPage } from './board-meeting-agenda.page';

describe('BoardMeetingAgendaPage', () => {
  let component: BoardMeetingAgendaPage;
  let fixture: ComponentFixture<BoardMeetingAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMeetingAgendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardMeetingAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
