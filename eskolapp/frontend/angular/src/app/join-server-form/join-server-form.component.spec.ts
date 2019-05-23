import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinServerFormComponent } from './join-server-form.component';

describe('JoinServerFormComponent', () => {
  let component: JoinServerFormComponent;
  let fixture: ComponentFixture<JoinServerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinServerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinServerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
