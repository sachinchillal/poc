// data-sources.js
async function customersList() {
  const API_URL = 'https://raw.githubusercontent.com/sachinchillal/poc/refs/heads/main/data/customers.json';
  const res = await fetch(API_URL);
  const data = await res.json();
  // console.log(data);
  return data;
}
async function usersList() {
  const API_URL = 'https://raw.githubusercontent.com/sachinchillal/poc/refs/heads/main/data/users.json';
  const res = await fetch(API_URL);
  const data = await res.json();
  // console.log(data);
  return data;
}

// etl.js
function userETL(userRaw) {
  const user = {};

  // Map properties with variations to standardized keys
  const propertyMap = {
    name: ['fullName', 'name', 'Name'],
    email: ['email', 'emailAddress', 'Email'],
    phone: ['phone', 'phoneNumber', 'Phone', 'mobile'],
  };

  Object.keys(propertyMap).forEach((standardKey) => {
    const variations = propertyMap[standardKey];
    for (const variation of variations) {
      if (Object.prototype.hasOwnProperty.call(userRaw, variation)) {
        user[standardKey] = userRaw[variation];
        break;
      }
    }
  });

  // Add any remaining properties not in propertyMap
  Object.keys(userRaw).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(user, key)) {
      user[key] = userRaw[key];
    }
  });

  return user;
}

// app.js
async function getAllUsers() {
  const customersRaw = await customersList();
  const usersRaw = await usersList();

  const customers = customersRaw.map(customerRaw => userETL(customerRaw));
  const users = usersRaw.map(userRaw => userETL(userRaw));

  const allUsers = [...customers, ...users];
  return allUsers;
}
async function main() {
  const allUsers = await getAllUsers();
  console.log({ allUsers });
}

main();

/*

To run use
node unified-api.js

*/