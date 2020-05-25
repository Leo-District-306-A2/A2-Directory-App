import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import 'jasmine';

import { ExecutiveDetailsPage } from './executive-details.page';

describe('ExecutiveDetailsPage', () => {
  let component: ExecutiveDetailsPage;
  let fixture: ComponentFixture<ExecutiveDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExecutiveDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
