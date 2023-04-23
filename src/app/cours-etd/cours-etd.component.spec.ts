import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursEtdComponent } from './cours-etd.component';

describe('CoursEtdComponent', () => {
  let component: CoursEtdComponent;
  let fixture: ComponentFixture<CoursEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursEtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
