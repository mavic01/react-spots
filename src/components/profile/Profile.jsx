import { useState, useRef } from "react";
import "./profile.css";
import Gallery from "../gallery/Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Profile = () => {
  const dialogRef = useRef(null);
  const galleryDialogRef = useRef(null);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    text: "",
    imageFile: null,
    imageUrl: "",
  });
  const [error, setError] = useState("");
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.text.trim()) return setError("Name is required");

    let imageSrc = "";
    if (formData.imageFile) {
      imageSrc = URL.createObjectURL(formData.imageFile);
    } else if (formData.imageUrl) {
      try {
        new URL(formData.imageUrl); // basic URL validation
        imageSrc = formData.imageUrl;
      } catch {
        return setError("Invalid URL");
      }
    }

    if (!imageSrc) return setError("Please upload an image or provide a valid URL");

    setCards((prev) => [...prev, { text: formData.text, image: imageSrc }]);
    setFormData({ text: "", imageFile: null, imageUrl: "" });
    setError("");
    dialogRef.current?.close();
  };

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();
  const openGalleryDialog = (card) => {
    setSelectedCard(card);
    galleryDialogRef.current?.showModal();
  };
  const closeGalleryDialog = () => galleryDialogRef.current?.close();

  return (
    <>
      <section className="profile">
        <img className="profileImage" src="/Bessie-Coleman.png" alt="Profile" />

        <div className="profileDetails">
          <div className="profileNameAndJob">
            <h2 className="profileName">Bessie Coleman</h2>
            <p className="profileJobTitle">Civil Aviator</p>
          </div>
          <p className="profileEdit">
            <img className="EditIcon" src="/Edit-Profile-Icon-Light.svg" alt="Edit" />
            Edit Profile
          </p>
        </div>

        <button className="profileBtn" onClick={openModal}>
          <img className="newPostIcon" src="/New-Post-Icon.svg" alt="New Post" />
          New Post
        </button>

        <dialog id="newPostDialog" ref={dialogRef}>
          <button type="button" onClick={closeModal} style={{ float: "right", cursor: "pointer" }}>
            ❌
          </button>
          <div className="wrapperrr">
            <h2>New Post</h2>
            <span style={{ fontSize: "1rem" }}>Upload Image or Paste URL</span>
            <form className="formm" onSubmit={handleSubmit}>
              <input
                name="text"
                type="text"
                placeholder="Enter name"
                value={formData.text}
                onChange={handleInputChange}
              />
              <input
                name="imageFile"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
              />
              <input
                name="imageUrl"
                type="url"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
              {error && <small style={{ color: "red" }}>{error}</small>}
              <button className="submitBtn" type="submit">Add Card</button>
            </form>
          </div>
        </dialog>
      </section>

      <div className="thin-line"></div>

      <div className="gallery_container">
        <Gallery />
        <div className="gallery_grid">
          {cards.map((card, index) => (
            <div className="gallery_1" key={index} onClick={() => openGalleryDialog(card)}>
              <img src={card.image} alt={card.text} className="img1" />
              <div className="content">
                <p>{card.text}</p>
                <FontAwesomeIcon
                  icon={likedItems[index] ? solidHeart : regularHeart}
                  className={likedItems[index] ? "redd" : ""}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent opening the modal
                    toggleLike(index);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="thin-line"></div>

      <dialog ref={galleryDialogRef} className="gallery-modal">
        {selectedCard && (
          <div className="gallery-modal-content">
            <button onClick={closeGalleryDialog} className="close-btn">❌</button>
            <img src={selectedCard.image} alt={selectedCard.text} className="modal-img" />
            <p className="modal-text">{selectedCard.text}</p>
          </div>
        )}
      </dialog>
    </>
  );
};

export default Profile;
