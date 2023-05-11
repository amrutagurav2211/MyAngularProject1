import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusPipeComponent } from './cus-pipe.component';

describe('CusPipeComponent', () => {
  let component: CusPipeComponent;
  let fixture: ComponentFixture<CusPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
