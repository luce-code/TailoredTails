import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";

export const Home = () => {
  const userID = useGetUserID();
  const [mydogs, setMydogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  const getAgeInYearsAndMonths = (ageInMonths) => {
    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;
    return `${years} years, ${months} months`;
  };

  useEffect(() => {
    const fetchMydogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/mydogs", {
          headers: {
            "user-id": userID,
          },
        });
        setMydogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMydogs();
  }, []);

  const handleEdit = (mydog) => {
    setEditingDog(mydog);
  };

  const handleSave = async (updatedDog) => {
    try {
      await axios.put(
        `http://localhost:3001/mydogs/${updatedDog._id}`,
        updatedDog
      );
      setMydogs(
        mydogs.map((dog) => (dog._id === updatedDog._id ? updatedDog : dog))
      );
      setEditingDog(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setEditingDog(null);
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
            {editingDog && editingDog._id === mydog._id ? (
              <div>
                <input
                  type="text"
                  value={editingDog.name}
                  onChange={(event) =>
                    setEditingDog({ ...editingDog, name: event.target.value })
                  }
                />
                <input
                  type="number"
                  value={editingDog.age}
                  onChange={(event) =>
                    setEditingDog({
                      ...editingDog,
                      age: parseInt(event.target.value),
                    })
                  }
                />
                <input
                  type="number"
                  value={editingDog.weight}
                  onChange={(event) =>
                    setEditingDog({
                      ...editingDog,
                      weight: parseInt(event.target.value),
                    })
                  }
                />
                <input
                  type="text"
                  value={editingDog.breed}
                  onChange={(event) =>
                    setEditingDog({ ...editingDog, breed: event.target.value })
                  }
                />
                <img src={editingDog.imageUrl} alt={editingDog.name} />
                <button onClick={() => handleSave(editingDog)}>Save</button>
                <button onClick={() => handleCancel()}>Cancel</button>
              </div>
            ) : (
              <div>
                <h2>{mydog.name}</h2>
                <button onClick={() => handleEdit(mydog)}>Edit</button>
                <button onClick={() => handleDelete(mydog)}>Delete</button>
              </div>
            )}
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
