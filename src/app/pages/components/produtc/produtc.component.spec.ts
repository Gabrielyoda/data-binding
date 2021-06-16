import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcComponent } from './produtc.component';

describe('ProdutcComponent', () => {
  let component: ProdutcComponent;
  let fixture: ComponentFixture<ProdutcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
