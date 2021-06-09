import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  _model: string;
  _placeholderText = 'Start typing something';
  editorSettings = {};

  @Input()
  get placeholderText() {
    return this._placeholderText;
  }

  set placeholderText(placeholder: string) {
    this._placeholderText = placeholder;
  }

  @Input()
  get model() {
    return this._model;
  }
  set model(model: string) {
    this.modelChange.emit(model);
    this._model = model;
  }

  @Output()
  modelChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.editorSettings = {
      attribution: false,
      placeholderText: this.placeholderText
    };
  }
}
