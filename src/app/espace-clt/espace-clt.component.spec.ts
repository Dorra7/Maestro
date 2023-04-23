import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCltComponent } from './espace-clt.component';

describe('EspaceCltComponent', () => {
  let component: EspaceCltComponent;
  let fixture: ComponentFixture<EspaceCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
