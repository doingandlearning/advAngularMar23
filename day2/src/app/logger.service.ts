import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor(private enabled: boolean) {}
}
