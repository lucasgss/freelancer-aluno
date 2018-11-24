import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuspedidosComponent } from './meuspedidos.component';

describe('MeuspedidosComponent', () => {
  let component: MeuspedidosComponent;
  let fixture: ComponentFixture<MeuspedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuspedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuspedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
