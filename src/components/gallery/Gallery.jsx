import { useState } from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const galleryItems = [
  {
    id: "valThorens",
    title: "Val Thorens",
    img: "/Vals-Thorens.png",
    description:
      "A ski town in the French Alps, known for its stunning slopes and vibrant après-ski scene.",
  },
  {
    id: "restaurantTerrace",
    title: "Restaurant terrace",
    img: "/Restaurant-Terrace.png",
    description:
      "A restaurant terrace dressed in green and yellow - an ambience of grandeur and elegance. A promise of fine dining and a good time.",
  },
  {
    id: "outdoorCafe",
    title: "An outdoor cafe",
    img: "/An-outdoor-cafe.png",
    description:
      "An outdoor cafe buzzing softly with laughter and conversation. The perfect spot to unwind and savour the moment.",
  },
  {
    id: "longBridge",
    title: "A very long bridge, over the forest...",
    img: "/A-very-long-bridge-over-the-forest.png",
    description:
      "A very long bridge, suspended over the forest. Can you dare to cross it?",
  },
  {
    id: "tunnelMorningLight",
    title: "Tunnel with morning light",
    img: "/Tunnel-with-the-morning-light.png",
    description:
      "Iron-framed glass walls, morning light spilling from their sides - glinting, scattering. A breathtaking sight.",
  },
  {
    id: "mountainHouse",
    title: "Mountain house",
    img: "/Mountain-house.png",
    description:
      "A mountain house shrouded in fog, surrounded by trees and of course mountains. Depending on your vibe, it could mean solitude. A cabin perfect for a getaway.",
  },
];

const Gallery = () => {
  const [openDialogId, setOpenDialogId] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  const handleOpen = (id) => setOpenDialogId(id);
  const handleClose = () => setOpenDialogId(null);

    const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="gallery_grid">
      {galleryItems.map(({ id, title, img, description }) => (
        <div className="gallery_1" key={id}>
          <img
            src={img}
            alt={title}
            className="img1"
            onClick={() => handleOpen(id)}
          />
          <div className="content">
            <p>{title}</p>
            <FontAwesomeIcon
              icon={likedItems[id] ? solidHeart : regularHeart}
              className={likedItems[id] && 'redd'}
              onClick={() => toggleLike(id)}
              style={{ cursor: "pointer"}}
            />
          </div>

          {openDialogId === id && (
            <dialog open className="dialog-box">
              <img
              src={img}
              alt={title}
              className="modal-img"
            />
              <p className="desc">{description}</p>
              <button onClick={handleClose} style={{padding: "5px", cursor: "pointer"}}>Close</button>
            </dialog>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;

