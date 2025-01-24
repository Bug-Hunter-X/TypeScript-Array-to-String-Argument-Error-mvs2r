# TypeScript Array to String Argument Error

This repository demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string.  The error message is: `Argument of type 'string[]' is not assignable to parameter of type 'string'.`

The `bug.ts` file shows the erroneous code. The `bugSolution.ts` file provides solutions to correct the issue.

This error is frequently encountered when working with functions designed to operate on single string values, but inadvertently receiving an array instead.  Careful type checking and handling of input parameters are essential to avoid this.

Solutions include iterating over the array and processing each string element individually or refactoring the function signature to accept an array of strings.