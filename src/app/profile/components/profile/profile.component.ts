import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    private profileService: ProfileService
  ) {}

  private onUpdateProfile(name: string) {
    this.profileService.updateProfile(name);
    window.history.back();
  }

}
