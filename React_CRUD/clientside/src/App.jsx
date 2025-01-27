import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ApiPath from "./ApiPath";

function App() {
  const [data, setData] = useState({ name: "", address: "", email: "" });
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const addData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${ApiPath()}/add`, data);
      if (res.status === 201) {
        alert(res.data.msg);
        setData({ name: "", address: "", email: "" });
        setCount(count + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${ApiPath()}/get`);
        if (res.status === 200) {
          const updatedList = res.data.map((item) => ({...item,  isEditing: false,}));
          setList(updatedList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [count]);

  const deleteData = async (_id) => {
    try {
      const res = await axios.delete(`${ApiPath()}/delete/${_id}`);
      if (res.status === 200) {
        alert(res.data.msg);
        setCount(count + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (index) => {
    const updatedList = [...list];
    updatedList[index].isEditing = true;
    setList(updatedList);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedList = [...list];
    updatedList[index][name] = value; 
    setList(updatedList);
  };

  const handleSave = async (index) => {
    const updatedUser = list[index];
    try {
      const res = await axios.put(`${ApiPath()}/update/${updatedUser._id}`, updatedUser);
      if (res.status === 200) {
        alert(res.data.msg);
        const updatedList = [...list];
        updatedList[index].isEditing = false;
        setList(updatedList);
        setCount(count + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="addpart">
        <div className="registration-container">
          <h2>Registration Form</h2>
          <form className="registration-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" placeholder="Enter your name" value={data.name}
               onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))  }/>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" name="address" placeholder="Enter your address"  value={data.address}  
              onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))  }/>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email"  name="email" placeholder="Enter your email" value={data.email}
                onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))  }/>
            </div>
            <button className="submit-btn" onClick={addData}> Register </button>
          </form>
        </div>
      </div>
      <div className="listbox">
        <div className="edit-delete-container">
          <h1>Details</h1>
          <ul className="edit-delete-form">
            {list.map((user, index) => (
              <li className="list-row" key={user._id}>
                <input type="text" name="name" value={user.name} disabled={!user.isEditing} onChange={(e) => handleChange(e, index)} className="input-field"/>
                <input type="text" name="address" value={user.address} disabled={!user.isEditing}  onChange={(e) => handleChange(e, index)} className="input-field"/>
                <input type="email" name="email" value={user.email}  disabled={!user.isEditing} onChange={(e) => handleChange(e, index)} className="input-field"/>
                {user.isEditing ? (
                  <button  type="button"  onClick={() => handleSave(index)}  className="btn edit-btn" >Update </button>
                ) : (
                  <button type="button" onClick={() => handleEdit(index)} className="btn edit-btn" > Edit </button>
                )}
                <button type="button" onClick={() => deleteData(user._id)} className="btn delete-btn"> Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
