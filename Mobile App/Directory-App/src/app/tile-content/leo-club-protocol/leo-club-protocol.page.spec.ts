import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeoClubProtocolPage } from './leo-club-protocol.page';

describe('LeoClubProtocolPage', () => {
  let component: LeoClubProtocolPage;
  let fixture: ComponentFixture<LeoClubProtocolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeoClubProtocolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeoClubProtocolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
