import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirCltComponent } from './devenir-clt.component';

describe('DevenirCltComponent', () => {
  let component: DevenirCltComponent;
  let fixture: ComponentFixture<DevenirCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenirCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevenirCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
