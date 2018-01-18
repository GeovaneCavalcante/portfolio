import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagenClientComponent } from './postagen-client.component';

describe('PostagenClientComponent', () => {
  let component: PostagenClientComponent;
  let fixture: ComponentFixture<PostagenClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagenClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagenClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
