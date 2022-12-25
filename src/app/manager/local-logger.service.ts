import { Injectable } from '@angular/core';

@Injectable()
export class LocalLoggerService {

  constructor() { }

  log(name: string): void {
    alert(`log from ${name} component`);
  }
}
