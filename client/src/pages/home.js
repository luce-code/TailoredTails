import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [mydogs, setMydogs] = useState([]);

  const getAgeInYearsAndMonths = (ageInMonths) => {
    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;
    return `${years} years, ${months} months`;
  };

  useEffect(() => {
    const fetchMydogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/mydogs");
        setMydogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMydogs();
  }, []);

  const handleEdit = (mydog) => {
    // Navigate to the EditMydog page and pass the mydog object as a prop
  };

  const handleDelete = async (mydog) => {
    try {
      await axios.delete(`http://localhost:3001/mydogs/${mydog._id}`);
      setMydogs(mydogs.filter((dog) => dog._id !== mydog._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>My Dogs</h1>
      <ul>
        {mydogs.map((mydog) => (
          <li key={mydog._id}>
            <div>
              <h2>{mydog.name}</h2>
              <button onClick={() => handleEdit(mydog)}>Edit</button>
              <button onClick={() => handleDelete(mydog)}>Delete</button>
            </div>
            <div className="instructions">
              <p>Age: {getAgeInYearsAndMonths(mydog.age)}</p>
              <p>Weight: {mydog.weight} kg</p>
            </div>
            <img src={mydog.imageUrl} alt={mydog.name} />
            <p>Breed: {mydog.breed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
