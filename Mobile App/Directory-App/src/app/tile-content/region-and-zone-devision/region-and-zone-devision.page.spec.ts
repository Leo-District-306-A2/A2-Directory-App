import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegionAndZoneDevisionPage } from './region-and-zone-devision.page';

describe('RegionAndZoneDevisionPage', () => {
  let component: RegionAndZoneDevisionPage;
  let fixture: ComponentFixture<RegionAndZoneDevisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionAndZoneDevisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionAndZoneDevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
