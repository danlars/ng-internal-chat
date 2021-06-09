import {Component, Input, OnInit} from '@angular/core';
import {ThreadInterface} from '../../../interfaces/thread.interface';
import {ThreadService} from './thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  @Input()
  thread: ThreadInterface;

  constructor(private readonly threadService: ThreadService) { }

  ngOnInit(): void {
  }

  isSelected() {
    return this.threadService.isSelected(this.thread);
  }

  selectThread() {
    this.threadService.setThread(this.thread);
  }

  removeThread() {
    this.threadService.removeThread(this.thread);
  }
}
