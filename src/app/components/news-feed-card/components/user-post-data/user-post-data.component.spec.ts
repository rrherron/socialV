import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostDataComponent } from './user-post-data.component';

describe('UserPostDataComponent', () => {
  let component: UserPostDataComponent;
  let fixture: ComponentFixture<UserPostDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
