import * as React from "react";
import "./styles.css";
import unknown from "../public/unknown.jpeg";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [currUser, setCurrUser] = React.useState(0);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?id<=3");
    const json = await res.json();
    setUsers(json.data);
  };
  const returnId = (user) => {
    setCurrUser(user.id);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>Covin Assignment</h1>
      <div className="flex">
        {currUser !== 0 ? (
          users
            .filter((user) => user.id === currUser)
            .map((user) => {
              return (
                <div key={user.id}>
                  <p className="name">
                    <strong>{user.first_name}</strong>
                  </p>
                  <p className="email">{user.email}</p>
                  <img
                    key={user.avatar}
                    src={user.avatar}
                    alt={user.first_name}
                  />
                </div>
              );
            })
        ) : (
          <div>
            <p className="name">
              <strong>User Name</strong>
            </p>
            <p className="email">User Email</p>
            <img key={unknown} src={unknown} alt="unknown person" />
          </div>
        )}
      </div>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <button
                onClick={() => {
                  returnId(user);
                }}
              >
                {user.id}
              </button>
            );
          })}
      </div>
    </div>
  );
}
