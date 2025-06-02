// import "./gallery.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

// const Gallery = () => {
//   return (
//     <>
//       {/* <section className="gallery_container"> */}
//         <div className="gallery_grid">
//           <div className="gallery_1">
//             <img
//               src="/Vals-Thorens.png"
//               alt="Val Thorens"
//               className="img1"
//               onclick="document.getElementById('valThorens').show()"
//             />
//             <div className="content">
//               <p id="text1">Val Thorens</p>
//               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
//               {/* <i className="fa-regular fa-heart"></i> */}
              
//             </div>

//             <dialog id="valThorens">
//               <p>
//                 A ski town in the French Alps, known for its stunning slopes and
//                 vibrant après-ski scene.
//               </p>
//               <button onclick="document.getElementById('valThorens').close()">
//                 Close
//               </button>
//             </dialog>
//           </div>

//           <div className="gallery_1">
//             <img
//               src="/Restaurant-Terrace.png"
//               alt="Restaurant terrace"
//               className="img1"
//               onclick="document.getElementById('restaurantTerrace').show()"
//             />
//             <div className="content">
//               <p id="text2">Restaurant terrace</p>
//               {/* <i className="fa-regular fa-heart"></i> */}
//               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
//             </div>

//             <dialog id="restaurantTerrace">
//               <p>
//                 A restaurant terrace dressed in green and yellow - an ambience
//                 of grandeur and elegance. A promise of fine dining and a good
//                 time.
//               </p>
//               <button onclick="document.getElementById('restaurantTerrace').close()">
//                 Close
//               </button>
//             </dialog>
//           </div>

//           <div className="gallery_1">
//             <img
//               src="/An-outdoor-cafe.png"
//               alt="An outdoor cafe"
//               className="img1"
//               onclick="document.getElementById('outdoorCafe').show()"
//             />
//             <div className="content">
//               <p id="text3">An outdoor cafe </p>
//               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
//               {/* <i className="fa-regular fa-heart"></i> */}
//             </div>

//             <dialog id="outdoorCafe">
//               <p>
//                 An outdoor cafe buzzing softly with laughter and conversation.
//                 The perfect spot to unwind and savour the moment.
//               </p>
//               <button onclick="document.getElementById('outdoorCafe').close()">
//                 Close
//               </button>
//             </dialog>
//           </div>

//           <div className="gallery_1">
//             <img
//               src="/A-very-long-bridge-over-the-forest.png"
//               alt="A very long bridge, over the forest..."
//               className="img1"
//               onclick="document.getElementById('longBridge').show()"
//             />
//             <div className="content">
//               <p id="text4">A very long bridge, over the forest...</p>
//               {/* <i className="fa-regular fa-heart"></i> */}
//               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
//             </div>

//             <dialog id="longBridge">
//               <p>
//                 A very long bridge, suspended over the forest. Can you dare to
//                 cross it?
//               </p>
//               <button onclick="document.getElementById('longBridge').close()">
//                 Close
//               </button>
//             </dialog>
//           </div>

//           <div className="gallery_1">
//             <img
//               src="/Tunnel-with-the-morning-light.png"
//               alt="Tunnel with morning light"
//               className="img1"
//               onclick="document.getElementById('tunnelMorningLight').show()"
//             />
//             <div className="content">
//               <p id="text5">Tunnel with morning light</p>
//               {/* <i className="fa-regular fa-heart"></i> */}
//               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
//             </div>

//             <dialog id="tunnelMorningLight">
//               <p>
//                 Iron-framed glass walls, morning light spilling from their sides
//                 - glinting, scattering. A breathtaking sight.
//               </p>
//               <button onclick="document.getElementById('tunnelMorningLight').close()">
//                 Close
//               </button>
//             </dialog>
//           </div>

//           <div className="gallery_1">
//             <img
//               src="/Mountain-house.png"
//               alt="Mountain house"
//               className="img1"
//               onclick="document.getElementById('mountainHouse').show()"
//             />
//             <div className="content">
//               <p id="text6">Mountain house</p>
//               {/* <i className="fa-regular fa-heart"></i> */}
//               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
//             </div>

//             <dialog id="mountainHouse">
//               <p>
//                 A mountain house shrouded in fog, surrounded by trees and of
//                 course mountains. Depending on your vibe, it could be mean
//                 solitude. A cabin perfect for a getaway.
//               </p>
//               <button onclick="document.getElementById('mountainHouse').close()">
//                 Close
//               </button>
//             </dialog>
//           </div>
//         </div>
//       {/* </section> */}
//       {/* <div className="thin-line"></div> */}
//     </>
//   );
// };

// export default Gallery;



import { useState } from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

  const handleOpen = (id) => setOpenDialogId(id);
  const handleClose = () => setOpenDialogId(null);

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
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </div>

          {openDialogId === id && (
            <dialog open className="dialog-box">
              <img
              src={img}
              alt={title}
              className="modal-img"
            />
              <p>{description}</p>
              <button onClick={handleClose}>Close</button>
            </dialog>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;

