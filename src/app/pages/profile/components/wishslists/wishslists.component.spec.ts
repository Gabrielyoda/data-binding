import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishslistsComponent } from './wishslists.component';

describe('WishslistsComponent', () => {
  let component: WishslistsComponent;
  let fixture: ComponentFixture<WishslistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishslistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
