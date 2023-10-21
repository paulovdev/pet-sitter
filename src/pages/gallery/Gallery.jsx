import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <span>
        Equipe amorosa e atenciosa que trata seus cães como parte da nossa
        própria família.
      </span>
      <main>
        <figure>
          {gallery.map((item, index) => (
            <img key={index} src={item.photo} alt={item.alt} title={item.alt} />
          ))}
        </figure>
      </main>
    </section>
  );
};

export default Gallery;

const gallery = [
  { photo: "/foto-1.png", alt: "Foto cachorro solo 1" },
  { photo: "/foto-2.jpg", alt: "Foto cachorro solo 2" },
  { photo: "/foto-3.jpg", alt: "Cuidando dos cachorros 1" },
  { photo: "/foto-4.jpg", alt: "Cuidando dos cachorros 2" },
  { photo: "/foto-5.jpg", alt: "Cuidando dos cachorros 3" },
  { photo: "/foto-6.jpg", alt: "FCuidando dos cachorros 4" },
];
