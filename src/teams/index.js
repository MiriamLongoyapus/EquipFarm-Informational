import React from "react";
import './style.css';

const Teams = () => {
  const items = [
    {
      name: "Leila Ashur",
      title: "Mobile developer",
      imageSrc: "./image/ashur.jpeg",
    },
    {
      name: "Ann Mwang’ombe",
      title: "UX Researcher ",
      imageSrc: "./image/ann.jpg",
    },
    {
      name: "Mercy cheptoo",
      title: "Backend Engineer",
      imageSrc: "./image/mercy.jpeg",
    },
    {
      name: "Miriam Longonyapus",
      title: "Front-end developer",
      imageSrc: "./image/miriam.jpg",
    },
    {
      name: "Linah Wainaina",
      title: "Backend Engineer",
      imageSrc: "./image/linah.jpeg",
    },
  ];
  return (
    <div>
      <div className="heading">
      <h1>Our Team</h1>
      </div>
    <div className="container">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <img className="images" src={item.imageSrc} alt={item.name} />
          <div className="item-name">{item.name}</div>
          <div className="item-title">{item.title}</div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default Teams;

