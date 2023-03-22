# Angular Modules

Angular modules help organize your application into cohesive blocks of functionality. They make your code more modular and reusable, as well as more maintainable and testable. In this guide, we will explore code examples and suggestions for using modules for reusability in Angular.

# 1. Creating a shared module:
A shared module is a module that contains components, directives, and pipes that can be reused across multiple feature modules in your application.

Example:

shared.module.ts:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomDirective } from './directives/custom.directive';
import { CustomComponent } from './components/custom.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CustomPipe, CustomDirective, CustomComponent],
  exports: [CustomPipe, CustomDirective, CustomComponent, ReactiveFormsModule],
})
export class SharedModule {}
```

# 2. Using a shared module in a feature module:
To use the shared module in a feature module, you need to import it in the feature module's imports array.

Example:

feature.module.ts:

```typescript

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FeatureComponent],
})
export class FeatureModule {}
```

# 3. Creating a core module:
A core module is a module that contains singleton services and other core functionality that should only be imported once in your application. It is typically imported in the AppModule.

Example:

core.module.ts:

```typescript

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreService } from './services/core.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CoreService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule only in AppModule.');
    }
  }
}
```

# 4. Importing the core module in AppModule:
To import the CoreModule, add it to the imports array in AppModule.

app.module.ts:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

# Conclusion:
By using Angular modules effectively, you can create reusable, modular, and maintainable code in your Angular applications. Make use of shared and core modules to separate common components, directives, pipes, and services from feature-specific code.