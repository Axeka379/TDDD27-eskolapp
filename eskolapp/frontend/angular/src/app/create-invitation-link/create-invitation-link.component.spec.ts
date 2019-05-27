import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvitationLinkComponent } from './create-invitation-link.component';

describe('CreateInvitationLinkComponent', () => {
  let component: CreateInvitationLinkComponent;
  let fixture: ComponentFixture<CreateInvitationLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInvitationLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvitationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
