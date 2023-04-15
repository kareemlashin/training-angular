import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenAAdminComponent } from './children-a-admin.component';

describe('ChildrenAAdminComponent', () => {
  let component: ChildrenAAdminComponent;
  let fixture: ComponentFixture<ChildrenAAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenAAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenAAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
