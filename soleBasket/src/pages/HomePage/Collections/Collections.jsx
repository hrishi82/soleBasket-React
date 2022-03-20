import { CollectionCard } from "./CollectionCard";

const Collections = () => {
  return (
    <>
      <h1 className="topic-heading">COLLECTIONS</h1>
      <section className="collection-cards-container">
        <CollectionCard />
        <CollectionCard />
      </section>
    </>
  );
};

export { Collections };
