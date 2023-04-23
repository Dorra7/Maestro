import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirProfComponent } from './devenir-prof.component';

describe('DevenirProfComponent', () => {
  let component: DevenirProfComponent;
  let fixture: ComponentFixture<DevenirProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenirProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevenirProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
