import {createAction, props} from '@ngrx/store';

export const setThread = createAction('[Threads] Selected thread', props<{ thread }>());
export const addThread = createAction('[Threads] Add thread', props<{ thread }>());
export const removeThread = createAction('[Threads] Remove thread', props<{ thread }>());
export const setLatestMessageOnSelectedThread = createAction('[Threads] Set latest message to selected thread', props<{ thread, message }>());
