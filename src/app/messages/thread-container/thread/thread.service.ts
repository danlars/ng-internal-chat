import {Injectable} from '@angular/core';
import {ThreadInterface} from '../../../interfaces/thread.interface';
import {select, Store} from '@ngrx/store';
import {selectThread} from '../../../store/threads/threads.selectors';
import {ThreadsService} from '../../../store/threads/threads.service';

@Injectable()
export class ThreadService {
  private selectedThread: ThreadInterface | null = null;

  constructor(private readonly store: Store, private readonly threadsService: ThreadsService) {
    this.store.pipe(select(selectThread)).subscribe((thread) => {
      this.selectedThread = thread;
    });
  }

  isSelected(thread: ThreadInterface) {
    if (this.selectedThread === null) {
      return false;
    }
    return this.selectedThread.id === thread.id;
  }

  setThread(thread: ThreadInterface) {
    this.threadsService.setThread(thread);
  }

  removeThread(thread: ThreadInterface) {
    this.threadsService.removeThread(thread);
  }
}
