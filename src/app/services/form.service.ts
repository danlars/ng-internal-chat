import { Injectable } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ThreadInterface} from '../interfaces/thread.interface';
import {ThreadFormComponent} from '../messages/thread-form/thread-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private readonly modalService: NgbModal) { }

  openThreadForm(thread?: ThreadInterface) {
    const formRef = this.modalService.open(ThreadFormComponent, {
      size: "xl",
    });
    formRef.componentInstance.thread = thread;
  }
}
