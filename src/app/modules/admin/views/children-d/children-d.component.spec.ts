import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDComponent } from './children-d.component';

describe('ChildrenDComponent', () => {
  let component: ChildrenDComponent;
  let fixture: ComponentFixture<ChildrenDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
