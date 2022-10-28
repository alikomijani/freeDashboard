export type UserType = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const getUserByID = async (id: number): Promise<UserType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users[id - 1]);
    }, 2000);
  });
};

const users = [
  {
    id: 1,
    username: "ali",
    firstName: "ali",
    lastName: "komijani",
    email: "akpa125@gmail.com",
  },
  {
    id: 2,
    username: "Mehdi",
    firstName: "sdfali",
    lastName: "sdf",
    email: "akpa12dsf5@gmail.com",
  },
  {
    id: 1,
    username: "Hassan",
    firstName: "dfsdfsdf",
    lastName: "komijani",
    email: "akpa125@gmail.com",
  },
];
