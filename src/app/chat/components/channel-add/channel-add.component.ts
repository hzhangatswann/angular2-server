import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-add',
  templateUrl: './channel-add.component.html',
  styleUrls: ['./channel-add.component.css']
})
export class ChannelAddComponent implements OnInit {
@Output() addChannel = new EventEmitter<string>();

  channelForm: FormGroup;

  constructor(
    private fb: FormBuilder
) {}

  ngOnInit() {
    this.channelForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

private onAddChannel() {
    if (!this.channelForm.valid) return;

    this.addChannel.emit(this.channelForm.value.name);

    this.channelForm.reset();
  }
}
