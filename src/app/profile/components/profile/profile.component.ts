import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../shared/models/state.model';
import { ProfileState } from '../../reducers/profile.reducer';
import { ProfileActions } from '../../actions/profile.actions';

//import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileModel$: Observable<ProfileState>;

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.profileModel$ = this.store.select<ProfileState>('profile');
  }

  private onUpdateProfile(name: string) {
    this.store.dispatch({ type: ProfileActions.PROFILE_UPDATE_PROFILE, payload: name });
    window.history.back();
  }

}
