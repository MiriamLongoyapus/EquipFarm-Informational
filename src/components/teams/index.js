import React from "react";
import './style.css';

const Teams = () => {
  const items = [
    {
      name: "Leila Ashur",
      title: "Software Engineer",
      imageSrc: "./Img/ashur.jpeg",
    },
    {
      name: "Ann Mwang’ombe",
      title: "Software Engineer",
      imageSrc: "./Img/ann.jpg",
    },
    {
      name: "Mercy cheptoo",
      title: "Software Engineer",
      imageSrc: "./Img/mercy.jpeg",
    },
    {
      name: "Miriam Longonyapus",
      title: "Software Engineer",
      imageSrc: "./Img/miriam.jpg",
    },
    {
      name: "Linah Wainaina",
      title: "Software Engineer",
      imageSrc: "./Img/linah.jpeg",
    },
  ];
  return (
    <div className="body">
      <div className="heading">
      <h1>Our Team</h1>
      </div>
    <div className="content">
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

