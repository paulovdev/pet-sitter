import React from "react";

const Features = () => {
  return (
    <>
      <section id="features">
        <main>
          <h1>Serviços para Cães em Nosso Hotel</h1>
          <div className="features-cards">
            {features.map((item) => (
              <div className="card">
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
    title: "Acomodações sem Gaiolas",
    /*     subTitle:
      "Espaços amplos e aconchegantes em vez de gaiolas tradicionais. Quartos privados para cães individuais ou opções para famílias de cães.", */
  },
  {
    img: "/higiene.png",
    title: "Ambiente Familiar",
    /*  subTitle:
      "Equipe amorosa e atenciosa que trata seus cães como parte da nossa própria família. Atividades sociais e interação com outros cães, promovendo um ambiente acolhedor.", */
  },
  {
    img: "/gaiola.png",
    title: "Higiene Prioritária",
    /*   subTitle:
      "Limpeza rigorosa e esterilização diária de todas as áreas. Cães banhados, escovados e cuidados para garantir a limpeza e bem-estar.", */
  },
  {
    img: "/gaiola.png",
    title: "Higiene Prioritária",
    /*     subTitle:
      "Limpeza rigorosa e esterilização diária de todas as áreas. Cães banhados, escovados e cuidados para garantir a limpeza e bem-estar.", */
  },
];
