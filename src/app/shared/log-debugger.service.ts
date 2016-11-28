import { Injectable } from '@angular/core';

@Injectable()
export class LogDebuggerService {
  constructor(private _enabled: boolean) { }
  debug(message: string) {
    if (this._enabled)
      return console.log('DEBUG: '+message);
  }
}
