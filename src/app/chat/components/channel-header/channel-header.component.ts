import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-channel-header',
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelHeaderComponent {

  @Input() name: string;
  @Output() goProfile = new EventEmitter<void>();

  private onGoProfile() {
    this.goProfile.emit(null);
  }

}
