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
    age: { years: "", months: "" },
    weight: "",
    imageUrl: "",
    breed: "",
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "ageYears" || name === "ageMonths") {
      setMydogs({
        ...mydogs,
        age: {
          ...mydogs.age,
          [name === "ageYears" ? "years" : "months"]: value,
        },
      });
    } else {
      setMydogs({ ...mydogs, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "http://localhost:3001/mydogs",
        { ...mydogs },
        {
          headers: {
            Authorization: `Bearer ${cookies.access_token}`,
            "user-id": userID,
          },
        }
      );
      alert("Mydog created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const convertToLbs = (kg) => {
    return Math.round(kg * 2.20462);
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
        <label htmlFor="weight">Weight (kg)</label>
        <div>
          <input
            type="number"
            id="weight"
            name="weight"
            value={mydogs.weight}
            onChange={handleChange}
          />
          <span>{`(${convertToLbs(mydogs.weight)} lbs)`}</span>
        </div>
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
