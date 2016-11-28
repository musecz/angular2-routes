import { Injectable } from '@angular/core';
import {ConsoleLogService} from './console-log.service'
@Injectable()
export class LogDebuggerService {
  constructor(private _consoleLog: ConsoleLogService, private _enabled: boolean) { }
  debug(message: string) {
    if (this._enabled)
       this._consoleLog.log('DEBUG: '+message);
  }
}
