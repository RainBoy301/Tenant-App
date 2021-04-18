import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourListingsPage } from './your-listings.page';

describe('YourListingsPage', () => {
  let component: YourListingsPage;
  let fixture: ComponentFixture<YourListingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourListingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
