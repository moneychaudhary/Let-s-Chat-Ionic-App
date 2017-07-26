import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {


  @Output() sendMessage: EventEmitter<string>;

  content: string;

  constructor() {
    this.sendMessage = new EventEmitter<string>();

  }

  send() {
    console.log(this.content);
    this.sendMessage.emit(this.content);
    this.content='';
  }

  change() {
    // get elements
    let element   = document.getElementById('messageInputBox');
    let textarea  = element.getElementsByTagName('textarea')[0];

    // set default style for textarea
    textarea.style.minHeight  = '0';
    textarea.style.height     = '0';

    // limit size to 96 pixels (6 lines of text)
    let scroll_height = textarea.scrollHeight;
    if(scroll_height > 96)
      scroll_height = 96;

    // apply new style
    element.style.height      = scroll_height + "px";
    textarea.style.minHeight  = scroll_height + "px";
    textarea.style.height     = scroll_height + "px";
  }

}
