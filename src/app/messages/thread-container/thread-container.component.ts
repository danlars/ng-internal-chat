import {Component, OnDestroy} from '@angular/core';
import {ThreadsService} from '../../store/threads/threads.service';
import {combineLatest, Observable} from 'rxjs';
import {ThreadInterface} from '../../interfaces/thread.interface';
import {FormService} from '../../services/form.service';
import {debounceTime, map, startWith} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';
import {fuzzySearch} from '../../functions/fuzzy-search';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss']
})
export class ThreadContainerComponent implements OnDestroy {
  threads$: Observable<ThreadInterface[]>;
  selectedThread: ThreadInterface | null = null;
  threadSearch = new FormControl('', {validators: [Validators.required]});

  constructor(private readonly threadsService: ThreadsService, private readonly formService: FormService) {
    this.threads$ = combineLatest([
      this.threadSearch.valueChanges.pipe(startWith('')),
      this.threadsService.threads$
    ]).pipe(
      debounceTime(600),
      map(([search, threads]) => {
        if (!search) {
          return threads;
        }
        return threads.filter((thread) => fuzzySearch(search, thread.name));
      })
    );
    this.threadsService.selectedThread$.subscribe((thread) => {
      this.selectedThread = thread;
    });
  }

  ngOnDestroy() {
    this.threadsService.setThread(null);
  }

  createThread() {
    this.formService.openThreadForm();
  }
}
