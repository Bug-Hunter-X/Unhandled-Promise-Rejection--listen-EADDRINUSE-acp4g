# Node.js EADDRINUSE Error

This repository demonstrates a common Node.js error: `EADDRINUSE`, which occurs when a server tries to bind to a port already in use.  The `bug.js` file contains the problematic code. The solution, in `bugSolution.js`, showcases how to handle this error gracefully.

## Steps to Reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Run `node bug.js` again (without stopping the first instance).

You'll see the `EADDRINUSE` error on the second attempt.

## Solution

The `bugSolution.js` file demonstrates a robust approach to handle the `EADDRINUSE` error.  It attempts to listen on the port; if it fails, it waits for a short period and tries again. This is typically the preferred way of handling this scenario to ensure the service recovers in most cases.

## Technologies Used

* Node.js
* JavaScript