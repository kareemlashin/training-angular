import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenBComponent } from './children-b.component';

describe('ChildrenBComponent', () => {
  let component: ChildrenBComponent;
  let fixture: ComponentFixture<ChildrenBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
