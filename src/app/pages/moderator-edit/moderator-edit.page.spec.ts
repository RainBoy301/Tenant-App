import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModeratorEditPage } from './moderator-edit.page';

describe('ModeratorEditPage', () => {
  let component: ModeratorEditPage;
  let fixture: ComponentFixture<ModeratorEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModeratorEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
