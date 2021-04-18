import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModeratorCreatePage } from './moderator-create.page';

describe('ModeratorCreatePage', () => {
  let component: ModeratorCreatePage;
  let fixture: ComponentFixture<ModeratorCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModeratorCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
