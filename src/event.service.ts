import { Injectable } from '@angular/core';
import { ImmutableBehaviorSubject } from 'immutable-rxjs';
import { Dictionary } from './dictionary';
import { EventKey } from './event-key';

@Injectable({
  providedIn: 'platform',
})
export class EventService {
  private cache: Dictionary<ImmutableBehaviorSubject<any>> = {};

  public get<T>(key: EventKey<T>): ImmutableBehaviorSubject<T> {
    const pKey = key.key;
    if (!this.cache[pKey]) {
      this.cache[pKey] = new ImmutableBehaviorSubject<T>(undefined);
    }
    return this.cache[pKey] as ImmutableBehaviorSubject<T>;
  }
}
