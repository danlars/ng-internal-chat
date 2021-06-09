import {createAction, props} from '@ngrx/store';

export const addMessage = createAction('[Messages] Add message', props<{ message }>());
