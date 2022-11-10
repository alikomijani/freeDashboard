import CustomFrom from "Components/CustomForm/CustomFrom";
import CustomTable from "Components/CustomTable/CustomTable";

type UserType = {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
};

const users: UserType[] = [
  { id: 1, username: "ali", email: "akpa125@gmail.com", isAdmin: true },
  { id: 2, username: "saeed", email: "saeed@yahoo.com", isAdmin: false },
];

type RegisterType = {
  username: string;
  email: string;
  password: string;
};

const Table = () => {
  const handleSubmit = (data: RegisterType) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 2000);
    });
  };
  return (
    <div>
      <CustomFrom
        onSubmit={handleSubmit}
        buttonText="loading"
        fields={[
          {
            label: "username",
            fieldsProps: { name: "username", type: "text" },
          },

          {
            label: "password",
            fieldsProps: { name: "password", type: "password" },
          },
        ]}
      />
      <CustomFrom
        onSubmit={handleSubmit}
        buttonText="register"
        fields={[
          {
            label: "username",
            fieldsProps: { name: "username", type: "text" },
          },
          {
            label: "email",
            fieldsProps: { name: "email", type: "email" },
          },
          {
            label: "password",
            fieldsProps: { name: "password", type: "password" },
          },
        ]}
      />

      <CustomTable
        data={users}
        headers={[
          { name: "id", title: "ID", render: (row) => row.id },
          {
            name: "username",
            title: "Username",
            render: (row) => row.username,
          },
          { name: "email", title: "Email", render: (row) => row.email },
          {
            name: "isAdmin",
            title: "Is Admin",
            render: (row) => (row.isAdmin ? "Yes" : "No"),
          },
        ]}
      />
    </div>
  );
};

export default Table;
