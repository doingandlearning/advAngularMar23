import { BehaviorSubject } from "rxjs";

const observable = new BehaviorSubject("I am going to say hello at some point");

const sub1 = observable.subscribe((value) => console.log(`Sub1: ${value}`));
observable.next("hello now"); // Pauses

observable.next("hello then"); // Pau
const sub2 = observable.subscribe((value) => console.log(`Sub2: ${value}`));
sub1.unsubscribe();
sub2.unsubscribe();

observable.next("hello when");

observable.next("TIME FOR LUNCH");
observable.subscribe((value) => console.log(`The third one ${value}`));
