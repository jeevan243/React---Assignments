import axios from "axios";
import { useState } from "react";

export const Pincode = () => {
    const [data, setData] = useState("");
    const [pincodeData, setPincodeData] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setData(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.postalpincode.in/pincode/${data}`).then((res) => {
            setPincodeData(res.data[0].PostOffice[0].District);
        });
    };
    console.log(pincodeData);
    return (
        <>
            <div>
                <h1>Pincode Data</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        id="number"
                        maxLength={6}
                        onChange={handleChange}
                    />{" "}
                    <input type="submit" />
                </form>
                <div>{pincodeData}</div>
            </div>
        </>
    );
};
