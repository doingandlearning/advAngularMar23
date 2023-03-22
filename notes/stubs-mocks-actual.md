# Stubs, Mocks and Real APIs

When testing Angular applications, you can choose between using mocks, stubs, or actual APIs. Each approach has its advantages and disadvantages. Understanding these differences will help you decide which method to use in various testing scenarios.

# Mocks
Mocks are objects that simulate the behavior of real objects, like services or components, with predefined responses to function calls. They're used to isolate the unit under test from external dependencies, making the tests more focused and less prone to breakage.

## Advantages:

- **Isolation**: Mocks ensure that the unit under test is not affected by external factors, allowing you to test its functionality in isolation.
- **Faster tests**: Since mocks don't involve actual API calls or other time-consuming operations, tests run faster.
- **Control**: You have full control over the behavior of mocked objects, allowing you to test different scenarios easily.

## Disadvantages:

- **Maintenance**: Mocks need to be updated if the original object's interface changes, which can increase maintenance overhead.
- **Limited realism**: Since mocks simulate behavior, they might not fully capture real-world scenarios, potentially leading to false positives or negatives.

Example:

```typescript
// user.service.spec.ts
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserService(httpClient);
  });

  it('should get user list', (done) => {
    const mockUsers = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    (httpClient.get as jasmine.Spy).and.returnValue(of(mockUsers));

    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
      done();
    });
  });
});
```

# Stubs
Stubs are simpler than mocks, providing predefined responses to function calls without simulating the entire behavior of an object. They're suitable for testing how a unit interacts with external dependencies.

## Advantages:

- **Simplicity**: Stubs are easier to create and maintain than mocks.
- **Focus**: Stubs allow you to focus on testing specific interactions with external dependencies.

## Disadvantages:

- **Limited control**: Stubs provide less control over the behavior of external dependencies compared to mocks.
- **Limited realism**: Like mocks, stubs might not fully capture real-world scenarios.

Example:

```typescript
// user.service.spec.ts
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

class StubHttpClient {
  get() {
    return of([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
  }
}

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = new StubHttpClient() as unknown as HttpClient;
    service = new UserService(httpClient);
  });

  it('should get user list', (done) => {
    service.getUsers().subscribe((users) => {
      expect(users).toEqual([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
      done();
    });
  });
});
```

# Actual APIs
Using actual APIs in tests involves making real API calls to fetch data. This approach can help uncover issues with the API integration but comes with its drawbacks.

## Advantages:

- **Realism**: Tests using actual APIs better represent real-world scenarios, increasing the chances of catching integration-related issues.
- **Less maintenance**: Since you're not simulating the API behavior, there's no need to update mocks or stubs when the API changes.

## Disadvantages:

- **Slower test**s: Making real API calls can significantly slow down test execution.
- **Flakiness**: Tests relying on actual APIs can be prone to flakiness due to network issues, API rate limits, or other external factors.
- **Dependencies**: Testing with actual APIs requires a running backend, making the test environment setup more complex.

Example:

```typescript
// user.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that no unmatched requests are outstanding
  });

  it('should get user list', () => {
    const mockUsers = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne('https://api.example.com/users');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });
});
```

In this example, we're using Angular's HttpTestingController to test a real API call. This approach allows you to inspect the request and control the response, making it more flexible than making actual API calls. However, it still involves more complexity than using mocks or stubs.

The choice between mocks, stubs, and actual APIs depends on your testing goals, the level of realism you need, and the acceptable trade-offs between speed, flakiness, and maintenance. It's essential to strike a balance that best suits your application's testing requirements.