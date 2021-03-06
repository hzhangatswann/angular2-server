import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAreaDialogComponent } from './chat-area-dialog.component';

describe('ChatAreaDialogComponent', () => {
  let component: ChatAreaDialogComponent;
  let fixture: ComponentFixture<ChatAreaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAreaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAreaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
