# Angular Libraries

Angular libraries are reusable pieces of code packaged as standalone npm packages. They are helpful when you want to share components, services, directives, and other Angular features across multiple applications. Creating an Angular library is a better solution when the code needs to be reused across multiple projects or when you want to version and distribute the code independently of the application.

## Notes:

- Angular libraries are built using the Angular CLI.
- Libraries can be published to npm or a private package registry.
- Applications can consume libraries as dependencies, similar to any other npm packages.

## Creating an Angular library:

1. Use the Angular CLI to generate a new library:

```bash
ng generate library my-library
```
This command creates a new folder called projects/my-library with the library's source code and configuration files.

2. Implement your components, services, directives, or pipes in the library:

```typescript
// projects/my-library/src/lib/my-component/my-component.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent {}
```

3. Export your components, services, directives, or pipes in the public-api.ts file:

```typescript
// projects/my-library/src/public-api.ts

export * from './lib/my-component/my-component.component';
```

4. Build the library:
```bash
ng build my-library
```

5. Publish the library to npm (optional):
```bash
cd dist/my-library
npm publish
```

## Consume the library in your Angular application:
1. First, install the library as a dependency:

```bash
npm install my-library
```

2. Then, import and use it in your AppModule or any other module:

```typescript
import { NgModule } from '@angular/core';
import { MyLibraryModule } from 'my-library';

@NgModule({
  imports: [MyLibraryModule],
})
export class AppModule {}
```

## Use cases for creating Angular libraries:

- Sharing UI components (e.g., buttons, input controls, or custom form controls) across multiple projects.
- Creating a design system or component library for a company or organization.
- Distributing utility functions, services, or directives that are commonly used in multiple applications.

## When to use Angular libraries instead of new modules or standalone components:

- Code reuse: If the code needs to be shared across multiple applications, it's better to create a library instead of copying the code or creating new modules in each project.
- Versioning: When you want to manage the versioning of the reusable code separately from the applications, libraries are a better choice.
- Distribution: If you need to distribute the code to other developers, either within your organization or publicly, creating an Angular library is the best approach.

---

When developing reusable components, services, directives, or other Angular features, Angular libraries are the best choice for managing, versioning, and distributing your code effectively.