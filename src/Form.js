import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [showRes, setShowRes] = useState(false);
  const [color, setColor] = useState("");
  const [checkedArr, setCheckedArr] = useState([]);

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChecked = (position, event) => {
    debugger;
    // console.log(event.target.checked);
    console.log(position);
    if (position == 0 && event.currentTarget.checked) {
      setCheckedArr([...checkedArr, "Cricket"]);
    } else if (position == 1 && event.currentTarget.checked) {
      setCheckedArr([...checkedArr, "Singing"]);
    } else if (position == 2 && event.currentTarget.checked) {
      setCheckedArr([...checkedArr, "Dancing"]);
    }
    // const updatedChecked = checkedState.map((item,index) =>
    //     index === position ? !item : item
    // )
    // setCheckedState(updatedChecked)
  };
  console.log(checkedArr);

  const handleInput = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    }
    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }
    if (event.target.id === "address") {
      setAddress(event.target.value);
    }
    if (event.target.id === "mobile") {
      setMobile(event.target.value);
    }
    if (event.target.id === "date") {
      setDate(event.target.value);
    }
  };
  const handleGender = (event) => {
    setGender(event.target.id);
  };
  //   REGISTER BUTTON
  const register = () => {
    // var count = 0
    // checkedState.map((item) =>{
    //     if(item == true){
    //         count = count+1
    //     }
    // })
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      mobile === "" ||
      gender === "" ||
      date === ""
    ) {
      setError("Fields cannot be empty!");
      setColor("red");
    } else {
      if (!/^[a-zA-Z_ ]*$/.test(name)) {
        setName("");
        setError("Name can't contain number or any special Character!");
        setColor("red");
      } else if (!/^[0-9]*$/.test(mobile)) {
        setMobile("");
        setError("Mobile Number can only contains Numbers!");
        setColor("red");
      } else {
        setError("Data Saved Successfully!");
        setColor("green");
        setShowRes(true);
      }
    }
  };

  // RESET BUTTON
  const reset = () => {
    setName("");
    setPassword("");
    setEmail("");
    setAddress("");
    setMobile("");
    setDate("");
    setGender("");
    setShowRes(false);
    setError("");
  };
  return (
    <div className="form">
      <p style={{ color: color }}>{error}</p>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Enter Your Name: </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={handleInput}
                />
              </td>
            </tr>

            <tr>
              <td>Enter Your Email: </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={handleInput}
                />
              </td>
            </tr>

            <tr>
              <td>Enter Your Password: </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={password}
                  onChange={handleInput}
                />
              </td>
            </tr>

            <tr>
              <td>Enter Your Address: </td>
              <td>
                <textarea
                  name="address"
                  id="address"
                  required
                  rows={4}
                  cols={21}
                  value={address}
                  onChange={handleInput}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td>Enter Your Mobile: </td>
              <td>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  required
                  minLength={10}
                  maxLength={10}
                  value={mobile}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>Select Your Gender: </td>
              <td>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  required
                  value={gender}
                  onChange={handleGender}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  required
                  value={gender}
                  onChange={handleGender}
                />
                <label htmlFor="female">Female</label>
              </td>
            </tr>
            <tr>
              <td>Choose Your Hobbies: </td>
              <td>
                <input
                  type="checkbox"
                  id="cricket"
                  name="hobbies"
                  value={checkedState[0]}
                  onChange={() => handleChecked(0)}
                />
                <label htmlFor="cricket">Cricket</label>
                <input
                  type="checkbox"
                  id="Singing"
                  name="hobbies"
                  value={checkedState[1]}
                  onChange={() => handleChecked(1)}
                />
                <label htmlFor="singing">Singing</label>
                <input
                  type="checkbox"
                  id="dancing"
                  name="hobbies"
                  value={checkedState[2]}
                  onChange={() => handleChecked(2)}
                />
                <label htmlFor="dancing">Dancing</label>
              </td>
            </tr>
            <tr>
              <td>Choose Your Profile Pic: </td>
              <td>
                <input type="file" id="file" name="file" required />
              </td>
            </tr>
            <tr>
              <td>Select Your DOB: </td>
              <td>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={date}
                  onChange={handleInput}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <input
            type="submit"
            value="register Me"
            className="btn"
            onClick={register}
          />
          <input type="reset" value="reset" className="btn" onClick={reset} />
        </center>
      </form>

      {/* {showRes ? (
        <div className="showres">
          <table>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Phone No: </td>
                <td>{mobile}</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>Gender: </td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>DOB: </td>
                <td>{date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null} */}
    </div>
  );
};

export default Form;
