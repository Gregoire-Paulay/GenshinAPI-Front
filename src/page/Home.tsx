import axios from "axios";
import { useEffect, useState } from "react";
import { ZodError, z } from "zod";

type DataExample =
  | "Personnage"
  | "Armes"
  | "Artéfacts"
  | "Boss hebdo"
  | "Boss monde";

const Home = (): JSX.Element => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [APIData, setAPIData] = useState<any>(null);
  const [search, setSearch] = useState<string>("/characters/details?name=Klee");
  const [count, setCount] = useState<number>(1);
  const [example, setExample] = useState<DataExample | null>(null);

  const handleChange = (event: any, setChange: any) => {
    setChange(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const { data } = await axios.get(
          `https://site--genshinapi--m8kkvg9l2hpy.code.run${search}`
        );

        const APIDataString = JSON.stringify(data, null, 2);
        setAPIData(APIDataString);

        console.log(APIData);

        // setAPIData(data);

        setIsLoading(false);
      } catch (error) {
        if (error instanceof ZodError) {
          setError(new Error("Erreur de validation Zod"));
        } else {
          setError(
            new Error("Nothing found with those data, try something else !")
          );
        }
      }
    };
    fetchData();
  }, [count]);

  if (isLoading)
    return (
      <div className="container">
        <div className="loading"></div>
      </div>
    );

  return (
    <div className="container">
      <div className="home">
        <div className="example">
          <button
            onClick={() => {
              setExample("Personnage");
              setSearch("/characters/details?name=Klee");
            }}
          >
            Personnages
          </button>
          <button
            onClick={() => {
              setExample("Armes");
              setSearch("/weapon/details?id=Weapon175");
            }}
          >
            Armes
          </button>
          <button
            onClick={() => {
              setExample("Artéfacts");
            }}
          >
            Artéfacts
          </button>
          <button
            onClick={() => {
              setExample("Boss hebdo");
            }}
          >
            Boss hebdomadaires
          </button>
          <button
            onClick={() => {
              setExample("Boss monde");
            }}
          >
            Boss de monde
          </button>
        </div>

        <div className="exampleDescription">
          {example === "Personnage" && (
            <div>
              <p className="bold">Pour avoir le détail d'un personnage :</p>
              <p className="paddingLeft">⏺ /characters/details?name=Klee</p>
              <p className="paddingLeft">⏺ /characters/details?id=P21</p>
            </div>
          )}
          {example === "Armes" && (
            <div>
              <p className="bold">
                Les routes qui renvoie des informations sur les armes :
              </p>
              <p className="paddingLeft">⏺ /weapon/materials</p>
              <p className="paddingLeft">⏺ /weapons</p>
              <p className="paddingLeft">
                ⏺ /weapon/details?name=Lance de Favonius
              </p>
              <p className="paddingLeft">⏺ /weapon/details?id=Weapon41</p>
            </div>
          )}
          {example === "Artéfacts" && (
            <div>
              <p className="bold">Détails sur les artéfacts :</p>
              <p className="paddingLeft">
                ⏺ /artifacts/details?name=Rideau du Gladiateur
              </p>
              <p className="paddingLeft">⏺ /artifacts/details?id=Art47</p>
            </div>
          )}
          {example === "Boss hebdo" && (
            <div>
              <p className="bold">Informations sur les Boss hebdomadaires :</p>
              <p className="paddingLeft">⏺ /boss/weekly</p>
              <p className="paddingLeft">⏺ /boss/weekly/details?name=Andros</p>
              <p className="paddingLeft">⏺ /boss/weekly/details?id=WB2</p>
            </div>
          )}
          {example === "Boss monde" && (
            <div>
              <p className="bold">Détails sur les Boss de monde :</p>
              <p className="paddingLeft">⏺ /boss/normal</p>
              <p className="paddingLeft">
                ⏺ /boss/normal/details?name=Tulpa Hydro
              </p>
              <p className="paddingLeft">⏺ /boss/normal/details?id=B15</p>
            </div>
          )}
        </div>

        <div className="request">
          <p>https://site--genshinapi--m8kkvg9l2hpy.code.run</p>
          <input
            type="text"
            placeholder="text"
            name="search"
            size={50}
            value={search}
            onChange={(event) => {
              handleChange(event, setSearch);
            }}
          />

          <button
            type="submit"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Envoyer
          </button>
        </div>

        {error && <div className="errorHome">{error.message}</div>}

        <div className="json">{APIData}</div>
      </div>
    </div>
  );
};

export default Home;
