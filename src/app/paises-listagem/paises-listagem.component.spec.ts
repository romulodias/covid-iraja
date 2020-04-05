import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesListagemComponent } from './paises-listagem.component';

describe('PaisesListagemComponent', () => {
  let component: PaisesListagemComponent;
  let fixture: ComponentFixture<PaisesListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
