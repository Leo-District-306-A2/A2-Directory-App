import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeoMapPage } from './leo-map.page';

describe('LeoMapPage', () => {
  let component: LeoMapPage;
  let fixture: ComponentFixture<LeoMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeoMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeoMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
