import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PledgesComponent } from './pledges.component';

describe('PledgesComponent', () => {
  let component: PledgesComponent;
  let fixture: ComponentFixture<PledgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
