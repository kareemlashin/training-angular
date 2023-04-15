import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCComponent } from './children-c.component';

describe('ChildrenCComponent', () => {
  let component: ChildrenCComponent;
  let fixture: ComponentFixture<ChildrenCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
