import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagementComponent } from './category-management.component';

describe('CtegoryManagementComponent', () => {
  let component: CategoryManagementComponent;
  let fixture: ComponentFixture<CategoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
