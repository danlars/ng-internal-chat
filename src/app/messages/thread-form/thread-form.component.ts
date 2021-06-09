import {Component, Input} from '@angular/core';
import {ThreadInterface} from '../../interfaces/thread.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ThreadsService} from '../../store/threads/threads.service';

@Component({
  selector: 'app-thread-form',
  templateUrl: './thread-form.component.html',
  styleUrls: ['./thread-form.component.scss']
})
export class ThreadFormComponent {
  private _thread: ThreadInterface = {
    name: '',
    created_at: new Date(),
    id: 100 * Math.random(),
  };

  @Input()
  get thread() {
    return this._thread;
  }
  set thread(thread) {
    if (thread) {
      this._thread = thread;
    }
  }

  constructor(private readonly threadsService: ThreadsService, public activeModal: NgbActiveModal) {
  }

  submit() {
    this.threadsService.addThread(this.thread);
    this.activeModal.close();
  }
}
