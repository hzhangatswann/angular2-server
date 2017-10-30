import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { State } from '../../../shared/models/state.model';
import { ProfileState, profileSelector } from '../../reducers/profile.reducer';
import { ProfileActions } from '../../actions/profile.actions';

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
    this.profileModel$ = this.store.select<ProfileState>(profileSelector);
  }

  private onUpdateProfile(name: string) {
    this.store.dispatch({ type: ProfileActions.PROFILE_UPDATE_PROFILE, payload: name });
    window.history.back();
  }

}
