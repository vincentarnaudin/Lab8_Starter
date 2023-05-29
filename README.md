# Lab 8 - Starter

1- Where would you fit your automated tests in your Recipe project development pipeline?

  Automated tests should be fitted within a GitHub action that runs whenever code is pushed to enable continuous integration, early issue detection, standardized testing environment, automation, efficiency, and integration with pull requests.

2- Would you use an end to end test to check if a function is returning the correct output? (yes/no)

  No. End-to-end tests are not typically used to check if a single function is returning the correct output.

3- Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

  No, unit tests alone would not be sufficient to test the "message" feature of a messaging application as it requires testing the integration of multiple components, real-time aspects, user interactions, and performance, which are better addressed through integration tests, end-to-end tests, and other specialized testing approaches.

4- Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

  Yes, a unit test would be suitable for testing the "max message length" feature of a messaging application as it involves a specific and isolated behavior within a single component, making it easily testable in isolation without dependencies on other components or external factors.