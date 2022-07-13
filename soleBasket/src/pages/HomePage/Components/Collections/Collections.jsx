import { CollectionCard } from "./CollectionCard";
import { useData } from "../../../../context/dataContext";
import { useEffect, useState } from "react";

const Collections = () => {
  const { state } = useData();
  const { allCollections } = state;

  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    let newArr = allCollections.map((el) => {
      if (el === "SUMMER") {
        return {
          collectionName: el,
          collectionCover:
            "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686444/ecomm/salehe-drop-2-croc-green-628c938cc2c11_kqkugk.jpg",
          collectionDescription: "Beat the heat, summer collection inbound!",
        };
      } else if (el === "WINTER") {
        return {
          collectionName: el,
          collectionCover:
            "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686441/ecomm/instapump-fury-94-kiwi-greenauberginejust-brown-624e9dbd024c9_q306us.jpg",
          collectionDescription:
            "Conquer the snow, our winter collection is here!",
        };
      } else if (el === "TIMELESS") {
        return {
          collectionName: el,
          collectionCover:
            "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686447/ecomm/superstar-parley-ftwr-whiteoff-whitewhite-tint-621dfafd63d8b_c6ogcj.jpg",
          collectionDescription: "Timeless, masterpiece",
        };
      } else if (el === "NEW") {
        return {
          collectionName: el,
          collectionCover:
            "https://res.cloudinary.com/dac2rwutk/image/upload/v1656686439/ecomm/327-deep-violet-625d24282d54a_zwys1q.jpg",
          collectionDescription: "Checkout our new collection!",
        };
      }
    });
    setCollectionData(newArr);
  }, [allCollections]);

  return (
    <>
      <h1 className="topic-heading">COLLECTIONS</h1>
      <section className="collection-cards-container">
        {collectionData.map((el) => (
          <CollectionCard key={el.collectionName} data={el} />
        ))}
      </section>
    </>
  );
};

export { Collections };
