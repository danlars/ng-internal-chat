import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThreadsService} from '../../store/threads/threads.service';
import {Observable} from 'rxjs';
import {ThreadInterface} from '../../interfaces/thread.interface';
import {FormService} from '../../services/form.service';
import {debounceTime} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss']
})
export class ThreadContainerComponent implements OnInit, OnDestroy {
  threads$: Observable<ThreadInterface[]>;
  selectedThread: ThreadInterface | null = null;
  threadSearch = new FormControl('', {validators: [Validators.required]});

  constructor(private readonly threadsService: ThreadsService, private readonly formService: FormService) {
  }

  ngOnInit() {
    this.threads$ = this.threadsService.filterThreads$;
    this.threadsService.selectedThread$.subscribe((thread) => {
      this.selectedThread = thread;
    });

    this.threadSearch.valueChanges.pipe(debounceTime(500)).subscribe((search) => {
      this.setSearch(search);
    });
  }

  ngOnDestroy() {
    this.setSearch(null);
    this.threadsService.setThread(null);
  }

  setSearch(search: string | null) {
    this.threadsService.setSearch(search);
  }

  createThread() {
    this.formService.openThreadForm();
  }
}
