import { useState } from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Gallery = ({ galleryItems }) => {
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
              className={likedItems[id] && "redd"}
              onClick={() => toggleLike(id)}
              style={{ cursor: "pointer" }}
            />
          </div>

          {openDialogId === id && (
            <dialog open className="dialog-box">
              <img src={img} alt={title} className="modal-img" />
              <p className="desc">{description}</p>
              <button
                onClick={handleClose}
                style={{ padding: "5px", cursor: "pointer" }}
              >
                Close
              </button>
            </dialog>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
