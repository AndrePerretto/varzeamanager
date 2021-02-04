import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherjogadoresPage } from './escolherjogadores.page';

describe('EscolherjogadoresPage', () => {
  let component: EscolherjogadoresPage;
  let fixture: ComponentFixture<EscolherjogadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherjogadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherjogadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
