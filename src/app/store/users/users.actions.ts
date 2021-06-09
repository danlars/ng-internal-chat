import {createAction, props} from '@ngrx/store';

export const setUser = createAction('[Users] Selected User', props<{ user }>());
export const setUsers = createAction('[Users] Set Users', props<{ users }>());
