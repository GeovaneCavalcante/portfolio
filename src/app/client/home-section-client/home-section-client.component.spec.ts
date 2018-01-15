import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionClientComponent } from './home-section-client.component';

describe('HomeSectionClientComponent', () => {
  let component: HomeSectionClientComponent;
  let fixture: ComponentFixture<HomeSectionClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
