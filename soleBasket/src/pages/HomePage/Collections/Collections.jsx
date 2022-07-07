import { CollectionCard } from "./CollectionCard";
import {useData} from "../../../context/dataContext"

const Collections = () => {

  const {state} = useData()
  const {allCollections} = state
  return (
    <>
      <h1 className="topic-heading">COLLECTIONS</h1>
      <section className="collection-cards-container">
        {allCollections.map(el=><CollectionCard key={el} data={el}/>)}
      </section>
    </>
  );
};

export { Collections };
