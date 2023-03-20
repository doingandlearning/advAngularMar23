# Pipes in Angular:

Pipes are a way to transform data in Angular templates before displaying it to the user.
Angular provides several built-in pipes, such as DatePipe, CurrencyPipe, and PercentPipe, which can be used to format data in different ways.
Pipes can be applied to an expression or a binding using the pipe character (|) followed by the name of the pipe and any parameters it requires.
Pipes can be chained together to perform multiple transformations on the same data.

```html
<p>{{ date | date:'longDate' }}</p> <!-- displays the date in long format -->
<p>{{ price | currency:'USD':'symbol':'1.2-2' }}</p> <!-- displays the price in US dollars with symbol and 2 decimal places -->
<p>{{ rating | percent }}</p> <!-- displays the rating as a percentage -->
```

# Creating Custom Pipes in Angular:

Custom pipes can be created in Angular to perform specific data transformations that are not covered by the built-in pipes.
- Custom pipes are created using the @Pipe decorator, which takes a name parameter and a pure parameter.
- The name parameter is the name of the pipe, which is used in the template to apply the pipe to an expression or a binding.
- The pure parameter is a boolean value that indicates whether the pipe is stateless or stateful. A stateless pipe always returns the same output for the same input, while a stateful pipe can have different outputs for the same input depending on its internal state.
- The @Pipe decorator also requires a transform method, which takes the input data as a parameter and returns the transformed output.
- Custom pipes can take additional parameters using the same syntax as the built-in pipes, and these parameters can be passed to the pipe in the template using the colon (:) character.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

```html
<!-- Using the custom pipe -->
<p>{{ 'hello world' | reverse }}</p> <!-- displays 'dlrow olleh' -->
```

# Generating Custom Pipes using Angular CLI:

Custom pipes can also be generated using the Angular CLI, which provides a command to create a new pipe file.
- The command is `ng generate pipe`, followed by the name of the pipe.

```bash
ng generate pipe reverse
```

This will generate a new file reverse.pipe.ts in the app/pipes directory with the following content:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
```

You can then modify the transform method to implement the custom transformation logic. Once the pipe is implemented, you can use it in your templates by adding the pipe character and the name of the pipe to the expression or binding, just like the built-in pipes.


---

More information here: https://angular.io/guide/pipes