import { useNavigate } from "react-router-dom";

const About = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="about">
        <div>
          <h1>À propos</h1>
          <p>
            Ce site web présente mon API sur Genshin Impact en français et
            permet de tester les informations obtenables via cette API, comme
            les personnages, boss, armes, artéfacts, etc ...
          </p>
        </div>
        <div>
          <h1>Qu'est ce qu'une API</h1>
          <p>
            Une API (Interface de Programmation d'Application) est une interface
            informatique visant à connecter un logiciel ou une application à
            d'autres systèmes distincts afin qu’ils puissent échanger leurs
            fonctionnalités, leurs services, leurs technologies et leurs
            données. Ici les données utilisables concerne Genshin Impact, et
            sont testables sur la page{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Home.
            </span>
          </p>
        </div>
        <div>
          <h1>Quelles informations sont disponibles</h1>
          <p>
            Beaucoup de données sont disponibles tel que :
            <ul className="aboutList">
              <li>⏺ Les Personnages</li>
              <li>⏺ Les Armes</li>
              <li>⏺ Les Artéfacts</li>
              <li>⏺ Les Boss hebdomadaires</li>
              <li>⏺ Les Boss de monde</li>
              <li>⏺ Les Matériaux d'ascension de personnages et d'armes</li>
            </ul>{" "}
            Ces données sont mis à jour régulièrement avec les nouvelles mise à
            jour de Genshin Impact.
          </p>
        </div>
        <div>
          <h1>Il manque des choses</h1>
          <p>
            Oui et je suis au courant, n'hésitez pas à contribuer via{" "}
            <a href="https://github.com/Gregoire-Paulay/Genshin-API">Github.</a>
          </p>
          <p>
            Si vous aves des idées ou des suggestions, n'hésitez pas à me{" "}
            <span
              onClick={() => {
                navigate("/Contact");
              }}
            >
              contacter ici.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
