import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToggleComponent } from './component-toggle.component';

describe('ComponentToggleComponent', () => {
  let component: ComponentToggleComponent;
  let fixture: ComponentFixture<ComponentToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
