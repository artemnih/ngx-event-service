## Get started

Install:
`npm i --save event-service`

Install peer dependency:
`npm i --save-dev immutable`
`npm i --save-dev immutable-rxjs`


## Event Service

Event service is a message bus used in publish/subscribe pattern for
communication between services, components etc

EventService accepts keys of type `EventKey`.

### Define keys

```typescript
import {EventKey} from 'ngx-event-service';

export const MyKeys = {
  title: new EventKey<string>('title'),
  pageDisabled: new EventKey<boolean>('pageDisabled'),
  date: new EventKey<Date>('date'),
};
```

### Usage

```typescript
import { EventService } from 'ngx-event-service';

export class MyClass {
  constructor(private es: EventService) {

    // subscribe to events like to normal observables
    this.es.get(MyKeys.title).subscribe(v => this.updateTitle(v));

    // read BehaviorSubject value directly
    const disabled  = this.es.get(MyKeys.pageDisabled).value;

    // publish new value to the bus channel
    this.es.get(MyKeys.date).next(new Date());
}
```

### Filtering undefined values

EvnetService BehaviorSubject contains `undefined` value by default. When
`undefined` value is undesirable, filter out using `rxjs` operator `filter`:

```typescript
this.es
  .get(MyKeys.title)
  .pipe(filter(x => !!x))
  .subscribe(v => this.updateTitle(v));
```
