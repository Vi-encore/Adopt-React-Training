import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          const { name, animal, breed, id, images, city, state } = pet;

          return (
            <Pet
              name={name}
              id={id}
              animal={animal}
              breed={breed}
              images={images}
              location={`${city}, ${state}`}
              key={id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
