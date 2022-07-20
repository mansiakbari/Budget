import React, { useEffect, useState } from "react";

const Fetchdata = () => {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUser(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  const style = {
    textAlign: "center",
    paddingTop: "0.75em",
    marginTop: "1em",
    marginRight: "70%",
    fontWeight: "bold",
    fontSize: "2em",
    border: "2px solid black",
  };
  return (
    <>
      <h4>List of users</h4>
      {user.map((ele) => {
        return (
          <div style={style} key={ele.id}>
            <h3>NAME={ele.name}</h3>
            <h5>{ele.email}</h5>
          </div>
        );
      })}
    </>
  );
};
export default Fetchdata;
