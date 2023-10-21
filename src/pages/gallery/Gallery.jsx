import React from "react";

const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <main>
          <h1>Nossa Galeria</h1>
          {gallery.map((item) => (
            <figure>
              <img
                src={item.photo}
                alt="Descrição da imagem"
                title="Título da imagem"
              ></img>
              <figcaption>Legenda ou descrição da imagem.</figcaption>
            </figure>
          ))}
        </main>
      </section>
    </>
  );
};

export default Gallery;

const gallery = [{ photo: "" }, { photo: "" }];
