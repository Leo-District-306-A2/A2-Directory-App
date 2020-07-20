import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleDetailsPage } from './multiple-details.page';

describe('MultipleDetailsPage', () => {
  let component: MultipleDetailsPage;
  let fixture: ComponentFixture<MultipleDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
