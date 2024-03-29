import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventCalendarPage } from './event-calendar.page';

describe('EventCalendarPage', () => {
  let component: EventCalendarPage;
  let fixture: ComponentFixture<EventCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
