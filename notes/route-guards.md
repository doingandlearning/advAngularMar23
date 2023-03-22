# Exploring Route Guards in Angular

Route guards play a crucial role in Angular applications by protecting routes from unauthorized access and helping with navigation control based on application logic, such as user authentication. By implementing route guards, developers can ensure a more secure and well-organized navigation experience within their applications.

## Types of Route Guards

In Angular, there are several types of route guards, each serving a unique purpose:

A. CanActivate: This route guard is used to determine whether a route can be activated or not. It is commonly employed for checking user authentication and authorization before allowing access to a particular route.

B. CanActivateChild: Similar to CanActivate, this guard is used to control access to child routes. It checks whether a user is allowed to access a specific child route, while not preventing the activation of the parent route itself.

C. CanDeactivate: This guard is used to control navigation away from a route. It is particularly useful in cases where unsaved changes or user interactions need to be checked before navigating to a different route, preventing potential data loss.

D. CanLoad: This route guard is used for controlling the loading of lazy-loaded feature modules. It checks whether a user has the necessary permissions to load a specific module before actually loading it, which can help optimize application performance by reducing unnecessary network requests.

## Practical Applications

### 1. Creating an Auth Guard (CanActivate)


1. Generate an auth guard using Angular CLI

    ```bash
    ng generate guard auth
    ```

2. Implement the canActivate method
    ```typescript
    // auth.guard.ts
    import { Injectable } from '@angular/core';
    import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
    import { AuthService } from './auth.service';

    @Injectable()
    export class AuthGuard implements CanActivate {
      constructor(private authService: AuthService, private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isLoggedIn()) {
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      }
    }
    ```

3. Add the AuthGuard to route configuration
    ```typescript
    // app-routing.module.ts
    import { AuthGuard } from './auth.guard';

    const routes: Routes = [
      { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
      // ...
    ];
    ```

B. CanDeactivate Guard (e.g., to prevent data loss)


 1. Generate a CanDeactivate guard
    ```
    ng generate guard can-deactivate
    ```

 2. Implement the CanDeactivate interface
    ```typescript
    // can-deactivate.guard.ts
    import { Injectable } from '@angular/core';
    import { CanDeactivate } from '@angular/router';
    import { EditComponent } from './edit.component';

    @Injectable()
    export class CanDeactivateGuard implements CanDeactivate<EditComponent> {
      canDeactivate(component: EditComponent): boolean {
        if (component.isFormDirty()) {
          return confirm('You have unsaved changes. Are you sure you want to leave?');
        }

        return true;
      }
    }
    ```

 3. Add the CanDeactivateGuard to route configuration
    ```typescript
    // app-routing.module.ts
    import { CanDeactivateGuard } from './can-deactivate.guard';

    const routes: Routes = [
      { path: 'edit/:id', component: EditComponent, canDeactivate: [CanDeactivateGuard] },
      // ...
    ];
    ```

## Gotchas and Things to Look Out For

- Don't forget to provide guards in the AppModule or a feature module
typescript // app.module.ts @NgModule({ providers: [AuthGuard, CanDeactivateGuard], }) export class AppModule {}

- CanDeactivate requires component-specific logic, make sure to adapt the guard for the specific use-case

- CanLoad can help with lazy-loading modules, but it won't prevent eager-loaded modules from being loaded. Use it only when necessary

- When using CanActivateChild, remember it doesn't prevent the parent route from activating, only its children

- When using observables in route guards, don't forget to complete them (e.g., by using take(1)), or the navigation might hang indefinitely

##  Conclusion

Route guards are powerful tools for controlling access to routes within an Angular application. By combining different types of guards, developers can create more robust and secure navigation experiences, ensuring that users only access routes they are authorized to visit.