import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import SportsHeader from "./components/SportsHeaders";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyUsers = [1, 2, 3, 4, 5, 6].map((_, i) => ({ id: i }));

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        {
          name: "Rohit Sharma",
          age: 33,
          profession: "Opener Batsman",
          profileImage:
            "https://tse2.mm.bing.net/th?id=OIP.G7GeByqUyCvfoOWU2POLXAAAAA&pid=Api&P=0&h=180.jpg",
        },
        {
          name: "Virat Kohli",
          age: 30,
          profession: "Batsman",
          profileImage: "https://wallpaperaccess.com/full/12292006.jpg",
        },
        {
          name: "K L Rahul",
          age: 28,
          profession: "Keeper and batsman",
          profileImage: "https://images.indianexpress.com/2023/09/Rahul-15.jpg",
        },
        {
          name: "SuryaKumar Yadav",
          age: 27,
          profession: "Batsman",
          profileImage:
            "https://tse3.mm.bing.net/th?id=OIP.ywGSCbcjPLULxQLYf7luGgHaEK&pid=Api&P=0&h=180.jpg",
        },
        {
          name: "MS Dhoni",
          age: 35,
          profession: "Batsman",
          profileImage:
            "https://i0.wp.com/neoprimesport.com/wp-content/uploads/2017/11/ms-dhoni-champions-trophy-0707.jpg?w=806&ssl=1",
        },
        {
          name: "Hardik Pandya",
          age: 29,
          profession: "Best Allrounder",
          profileImage:
            "https://static.toiimg.com/thumb/msid-108198181,width-900,height-1200,resizemode-6.cms",
        },
      ]);
      setLoading(false);
    }, 2000); 
  }, []);

  return (
<div>
  <SportsHeader/>
    <div className="profile-container">
      {(loading ? dummyUsers : users).map((user, index) => (
        <ProfileCard key={index} loading={loading} {...user} />
      ))}
    </div>
    </div>
  );
};

export default App;
