import {Injectable} from '@angular/core';
import {ThreadInterface} from '../../interfaces/thread.interface';
import {select, Store} from '@ngrx/store';
import {addThread, removeThread, setThread, setThreadSearch, setLatestMessageOnSelectedThread} from './threads.actions';
import {Observable} from 'rxjs';
import {selectThreads, selectThread, selectFilterThreads} from './threads.selectors';
import {MessageInterface} from '../../interfaces/message.interface';

@Injectable()
export class ThreadsService {
  selectedThread$: Observable<ThreadInterface | null>;
  threads$: Observable<ThreadInterface[]>;
  filterThreads$: Observable<ThreadInterface[]>;
  private _threads: ThreadInterface[] = [];

  constructor(private readonly store: Store) {
    this.threads$ = this.store.pipe(select(selectThreads));
    this.filterThreads$ = this.store.pipe(select(selectFilterThreads));
    this.selectedThread$ = this.store.pipe(select(selectThread));
    this.threads$.subscribe((threads) => {
      this._threads = threads;
    });
  }

  addThread(thread: ThreadInterface) {
    this.store.dispatch(addThread({thread}));
  }

  setSearch(search: string | null) {
    this.store.dispatch(setThreadSearch({search}));
  }

  removeThread(thread: ThreadInterface) {
    this.store.dispatch(removeThread({thread}))
  }

  setThread(thread: ThreadInterface | null) {
    this.store.dispatch(setThread({thread}))
  }

  setLatestMessageToSelectedThread(thread: ThreadInterface, message: MessageInterface) {
    this.store.dispatch(setLatestMessageOnSelectedThread({thread, message}));
    const updatedThread = this._threads.find((threadState) => threadState.id === thread.id);
    this.setThread(updatedThread);
  }
}
