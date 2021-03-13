import {ExtensionEvent} from 'src/types/ExtensionEvent';

export interface BrowserMessage<T = any> {
  event: ExtensionEvent;

  data?: T;
}
