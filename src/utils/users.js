const users = [];

const addUser = ({ id, username, room }) => {
  //   Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  //   Clean the data.
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //   Check for existing user.
  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );

  //   Validate username

  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  //   Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};
const removeUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = (idReference) => {
  const user = users.find(({ id }) => id === idReference);
  return user ? user : undefined;
};
const getUsersInRoom = (roomReference) => {
  return users.filter(({ room }) => room === roomReference);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
