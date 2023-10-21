import React from "react";

const Features = () => {
  return (
    <>
      <section id="features">
        <main>
          <h1>Serviços para Cães em Nosso Hotel</h1>
          <div className="features-cards">
            {features.map((item) => (
              <div className="card" key={item.alt} title={item.alt}>
                <img src={item.img} width={50} alt="" />
                <h1>{item.title}</h1>
                <p>{item.subTitle}</p>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Features;

const features = [
  {
    img: "/gaiola.png",
    title: "Acomodações sem gaiolas e sem correntes",
    alt: "sem gaiolas e sem correntes",
  },
  {
    img: "/familia.png",
    title: "Ambiente Familiar",
    alt: "Ambiente Familiar",
  },
  {
    img: "/higiene.png",
    title: "Higiene Prioritária",
    alt: "Higiene Prioritária",
  },
  {
    img: "/celular.png",
    title: "Monitoramento pelo celular ",
    alt: "Monitoramento pelo celular do dono",
  },
];
