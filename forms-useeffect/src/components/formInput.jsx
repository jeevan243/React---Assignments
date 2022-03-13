import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Appenddata } from "./formdata";

export const FormInput = () => {
  //object
  const obj = {
    name: "",
    age: "",
    department: "",
    gender: "",
  };

  //state for to fill the data and to post on the server
  const [formData, setFormdata] = useState(obj);

  //to get data from the database and render to the DOM
  const [getdatabaseData, setdatabaseData] = useState([]);

  //To give Pagenation
  const [page, setPage] = useState(1);

  //useEffect to call the getdata function
  useEffect(() => {
    getData();

    // return () => {
    //   console.log("Unmounted");
    // };
  }, [page]);

  //input - spreading data - gender - setformdata
  const handlechange = (e) => {
    const gender =
      e.target.id === "male" && e.target.checked === true ? "male" : "female";

    const { id, value } = e.target;

    if (id === "male" || id == "female") {
      setFormdata({
        ...formData,
        gender: gender,
      });
    } else {
      setFormdata({
        ...formData,
        [id]: value,
      });
    }
  };

  //submit to the server

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/usersData", formData).then(() => {
      alert("User Registered Successfully");
      getData();
    });
  };

  //getData from the database
  const getData = () => {
    axios
      .get(`http://localhost:3005/usersData?_limit=2&_page=${page}`)
      .then((res) => {
        setdatabaseData(res.data);
      });
  };

  //delete-function

  function Delete(data) {
    axios.delete(`http://localhost:3005/usersData/${data.id}`).then(() => {
      getData();
    });
  }

  //Localstoarge

  // localStorage.setItem("userData", )

  return (
    <>
      <div>
        <h2>Please Enter the Data</h2>
        <form onSubmit={handleSubmit}>
          Name:{" "}
          <input
            type="text"
            id="name"
            placeholder="Type name here"
            onChange={handlechange}
          />{" "}
          Age:{" "}
          <input
            type="text"
            id="age"
            placeholder="Type age here"
            onChange={handlechange}
          />
          <br />
          <br />
          Select Department:{" "}
          <select name="" id="department" onChange={handlechange}>
            <option value="department">Department</option>
            <option value="civil">Civil</option>
            <option value="mechanical">Mechanical</option>
            <option value="electrical">Electrical</option>
          </select>
          <br />
          <br />
          Gender:
          <label>Male</label>
          <input type="checkbox" id="male" onChange={handlechange} />{" "}
          <label>women</label>
          <input type="checkbox" id="female" onChange={handlechange} /> <br />
          <br />
          <input type="submit" />
        </form>
      </div>

      <div>
        <Appenddata getdatabaseData={getdatabaseData} Delete={Delete} />
      </div>

      <div className="pagination">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Prev
        </button>{" "}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};
