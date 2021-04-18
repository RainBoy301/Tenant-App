import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModeratorDefaultPage } from './moderator-default.page';

describe('ModeratorDefaultPage', () => {
  let component: ModeratorDefaultPage;
  let fixture: ComponentFixture<ModeratorDefaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorDefaultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModeratorDefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
