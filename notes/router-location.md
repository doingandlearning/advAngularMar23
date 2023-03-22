# Router Location Strategies

In Angular, there are two primary navigation strategies for routing: Hash Routing and HTML5 Routing (also known as Path Routing). Both strategies determine how Angular updates the browser's URL and how the router handles navigation requests. Let's explore each strategy, along with code examples, use cases, advantages, and disadvantages.

## Hash Routing:
Hash Routing uses the URL hash fragment (#) to simulate a full URL without actually requesting a new page from the server. This is particularly useful for single-page applications that don't require server-side rendering.

### Code example:

To enable Hash Routing, import the HashLocationStrategy and update the providers array in your AppModule:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        // your routes here
      ],
      { useHash: true }
    ),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Advantages:

- Works well with older browsers that don't support HTML5 History API.
- Doesn't require server-side configuration for URL rewriting.
- Easier to deploy on static file hosting services.

### Disadvantages:

- The URL looks less clean, with the '#' symbol.
- Limited SEO benefits, as search engines may not crawl or index the content after the hash.

### Use case: 
Hash Routing is useful for legacy systems or when deploying a single-page application on a static file hosting service without URL rewriting capabilities.

## HTML5 Routing (Path Routing):
HTML5 Routing leverages the HTML5 History API to manage URL paths without using the hash fragment. It provides cleaner URLs and requires proper server-side configuration to handle URL rewriting for deep linking.

This is the default behaviour, even though I'll show how to set it up. When you generate a new project with routing from the command line, this will all be done for you.

Code example:

To enable HTML5 Routing, import the PathLocationStrategy and update the providers array in your AppModule:

```typescript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        // your routes here
      ],
      { useHash: false } // This is the default behavior, so you can omit this line.
    ),
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Advantages:

- Cleaner URLs without the '#' symbol.
- Better SEO benefits, as search engines can crawl and index the content more effectively.

### Disadvantages:

- Requires proper server-side configuration to handle URL rewriting for deep linking.
- May not work well with older browsers that don't support HTML5 History API.

### Use case: 
HTML5 Routing is suitable for modern applications with server-side support for URL rewriting and improved SEO requirements.

---

The choice between Hash Routing and HTML5 Routing depends on the project's requirements, browser compatibility, server-side capabilities, and SEO considerations.