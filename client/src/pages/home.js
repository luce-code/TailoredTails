import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";

import { LuShare, LuEdit } from 'react-icons/lu';

import Landing from "./Landing";

export const Home = () => {
  const [cookies] = useCookies(["access_token"]);
  // rm setCookies, removeCookies until used

  // const handleLogout = () => {
  //   removeCookies("access_token");
  //   console.log("Logout clicked"); // add this line
  // };

  const userID = useGetUserID();
  const [mydogs, setMydogs] = useState([]);
  // rm mydogs until it is used

  // const [editingDog, setEditingDog] = useState(null);

  // const getAgeInYearsAndMonths = (ageInMonths) => {
  //   const years = Math.floor(ageInMonths / 12);
  //   const months = ageInMonths % 12;
  //   return `${years} years, ${months} months`;
  // };

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
  }, [userID, mydogs]);

  // const handleEdit = (mydog) => {
  //   setEditingDog(mydog);
  // };

  // const handleSave = async (updatedDog) => {
  //   try {
  //     await axios.put(
  //       `http://localhost:3001/mydogs/${updatedDog._id}`,
  //       updatedDog
  //     );
  //     setMydogs(
  //       mydogs.map((dog) => (dog._id === updatedDog._id ? updatedDog : dog))
  //     );
  //     setEditingDog(null);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleCancel = () => {
  //   setEditingDog(null);
  // };

  // const handleDelete = async (mydog) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/mydogs/${mydog._id}`);
  //     setMydogs(mydogs.filter((dog) => dog._id !== mydog._id));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      {!cookies.access_token ? (<Landing />) : (<>

      <h1>My Kennel</h1>

      <div className="kennel">

        <div className="pet-profile">
          <div className="pet-profile__header">
            <span className="pet-name">Zeus</span>
            <div className="pet-profile__icons-box">
            <span className="edit-button"><LuEdit /></span>
            <span className="share-button"><LuShare /></span>
            </div>
          </div>
          <img className="pet-profile__img" src="https://i.imgur.com/yoJen9C.png" alt="(pet name)" />
          <span className="pet-profile__detail">Age: 20 months</span>
          <span className="pet-profile__detail">Birthday: Oct 3rd, 2021</span>
          <span className="pet-profile__detail">Breed: Chow Chow</span>
          <span className="pet-profile__detail">Weight: 50 lbs</span>

          <span className="pet-profile__button">Likes & Dislikes</span>
          <span className="pet-profile__button">Routine</span>
          <span className="pet-profile__button">Schedule</span>
          <span className="pet-profile__button">Medical History</span>
          <span className="pet-profile__button">Emergency Contacts</span>
          <span className="pet-profile__button">Images & Files</span>
        </div>

        <div className="pet-profile">
          <div className="pet-profile__header">
            <span className="pet-name">Zeus</span>
            <div className="pet-profile__icons-box">
            <span className="edit-button"><LuEdit /></span>
            <span className="share-button"><LuShare /></span>
            </div>
          </div>
          <img className="pet-profile__img" src="https://i.imgur.com/yoJen9C.png" alt="(pet name)" />
          <span className="pet-profile__detail">Age: 20 months</span>
          <span className="pet-profile__detail">Birthday: Oct 3rd, 2021</span>
          <span className="pet-profile__detail">Breed: Chow Chow</span>
          <span className="pet-profile__detail">Weight: 50 lbs</span>

          <span className="pet-profile__button">Likes & Dislikes</span>
          <span className="pet-profile__button">Routine</span>
          <span className="pet-profile__button">Schedule</span>
          <span className="pet-profile__button">Medical History</span>
          <span className="pet-profile__button">Emergency Contacts</span>
          <span className="pet-profile__button">Images & Files</span>
        </div>

      </div>

      {/* <h1>My Dogs</h1>
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
      </ul> */}

      </>) }
    </div>
  );
};
