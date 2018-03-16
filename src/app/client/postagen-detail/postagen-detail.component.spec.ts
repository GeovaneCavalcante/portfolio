import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagenDetailComponent } from './postagen-detail.component';

describe('PostagenDetailComponent', () => {
  let component: PostagenDetailComponent;
  let fixture: ComponentFixture<PostagenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
