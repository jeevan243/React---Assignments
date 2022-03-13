import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { GroceryList } from "./grocerylist";

export const GroceryInput = () => {
  const [item, setItem] = useState("");
  const [groceries, setGroceries] = useState([]);
  console.log(groceries);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:30001/groceries").then((res) => {
      setGroceries(res.data);
    });
  };

  //delte

  function Delete(item) {
    console.log(item.id);
    axios.delete(`http://localhost:30001/groceries/${item.id}`);
    getData();
  }

  return (
    <>
      <div>
        <input type="text" className="groceryinput" onChange={handleChange} />{" "}
        <button
          onClick={() => {
            axios.post("http://localhost:30001/groceries", {
              item: item,
              purchased: "false",
            });
            getData();
            console.log("here");
          }}
        >
          Add item
        </button>
      </div>

      <div className="groceries-Input">
        <GroceryList items={groceries} Delete={Delete} />
      </div>
    </>
  );
};
