Check for memory leaks: 

Memory leaks can cause your application to use up more memory than necessary, leading to the "Out of Memory" error. You can use the Chrome DevTools to analyze the memory usage of your application and look for any memory leaks. You can take heap snapshots before and after performing specific actions and compare the two to identify any growth in memory usage that is not being released.

Optimize the data: 

If the amount of data being used is too large, you may need to consider optimizing it to reduce the size of the payload being sent to the client. For instance, you can limit the amount of data being requested or break the data down into smaller chunks to improve performance.

Consider server-side pagination: 

Server-side pagination can also help to reduce the amount of data being sent to the client. This means that instead of requesting all the data at once, you can break it down into smaller chunks and request only the data that is needed for a particular page or view.

Use virtual scrolling: 

Virtual scrolling is a technique that allows you to render only a portion of the data on the screen at a time, reducing the amount of memory used by your application.