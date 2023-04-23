import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursPfComponent } from './cours-pf.component';

describe('CoursPfComponent', () => {
  let component: CoursPfComponent;
  let fixture: ComponentFixture<CoursPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursPfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
