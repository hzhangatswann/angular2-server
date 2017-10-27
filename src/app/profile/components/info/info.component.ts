import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  @Input() name: string;
  @Output() updateProfile = new EventEmitter<string>();

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [this.name, Validators.required]
    });
  }

  private onUpdateProfile() {
    if (!this.profileForm.valid) return;

    this.updateProfile.emit(this.profileForm.value.name);
  }

}
