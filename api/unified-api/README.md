# Unified API

A Unified API aggregates multiple APIs into a single, standardized interface, simplifying integration and reducing complexity for developers. It provides a consistent endpoint, authentication, and data model, making it easier to interact with various services. This approach enhances functionality and speeds up development by minimizing the need for custom integrations.

To Build a unified API project using latest technology like Node.js! With various API sources for getting customers' and users' data, you can create a single API that aggregates and normalizes the data from both sources. Here's a high-level idea to get you started:

1. **API Gateway**: Create a Node.js API gateway that will act as the entry point for your unified API. This will be the single API endpoint that clients will interact with.
2. **API Connectors**: Create separate connectors for each of the API sources. These connectors will be responsible for making requests to the respective APIs, handling authentication, and parsing the responses.
3. **Data Normalization** and **ETL**: Create a data normalization layer that takes the responses from the API connectors and transforms the data into a standardized format. This will ensure that the data from all the sources is consistent and easy to work with.


## [unified-api.js](./unified-api.js)

This file contains the implementation of a unified API that aggregates data from multiple sources and standardizes it into a consistent format.

### Functions

#### `customersList()`
Fetches the list of customers from a remote JSON file.

- **Returns**: A promise that resolves to an array of customer objects.

#### `usersList()`
Fetches the list of users from a remote JSON file.

- **Returns**: A promise that resolves to an array of user objects.

#### `userETL(userRaw)`
Transforms raw user data into a standardized format.

- **Parameters**: 
  - `userRaw` (Object): The raw user data.
- **Returns**: An object with standardized user properties.

#### `getAllUsers()`
Aggregates and standardizes data from both customers and users.

- **Returns**: A promise that resolves to an array of all users in a standardized format.

#### `main()`
Main function to execute the unified API and log the aggregated user data.

- **Returns**: None