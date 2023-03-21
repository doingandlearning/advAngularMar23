import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor(@Inject(Boolean) private enabled: boolean) {}
}
