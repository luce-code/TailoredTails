import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateMydog = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [mydogs, setMydogs] = useState({
    name: "",
    age: "",
    weight: "",
    imageUrl: "",
    breed: "",
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMydogs({ ...mydogs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "localhost:3001/mydogs/my-dog",
        { ...mydogs },
        {
          headers: { Authorization: `Bearer ${cookies.access_token}` },
        }
      );

      alert("Mydog created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-mydog">
      <h2>Create Mydog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={mydogs.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={mydogs.age}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={mydogs.weight}
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={mydogs.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={mydogs.breed}
          onChange={handleChange}
        />
        <button type="submit">Create Mydog</button>
      </form>
    </div>
  );
};
