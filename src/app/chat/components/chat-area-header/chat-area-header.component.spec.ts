import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAreaHeaderComponent } from './chat-area-header.component';

describe('ChatAreaHeaderComponent', () => {
  let component: ChatAreaHeaderComponent;
  let fixture: ComponentFixture<ChatAreaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAreaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAreaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
