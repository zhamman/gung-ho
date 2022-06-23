import react, { useEffect } from "react";
import "./Filter.scss";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, videos }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(videos);
      return;
    }
    const filter = videos.filter(vid => vid.genre.includes(activeGenre));
    // console.log(filter);
    setFiltered(filter);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>

      <button
        className={activeGenre === 2 ? "active" : ""}
        onClick={() => setActiveGenre(2)}
      >
        TV
      </button>
      <button
        className={activeGenre === 4 ? "active" : ""}
        onClick={() => setActiveGenre(4)}
      >
        Documentaries
      </button>
      <button
        className={activeGenre === 1 ? "active" : ""}
        onClick={() => setActiveGenre(1)}
      >
        Tv Commercials
      </button>
      <button
        className={activeGenre === 3 ? "active" : ""}
        onClick={() => setActiveGenre(3)}
      >
        Feature Films
      </button>
      <button
        className={activeGenre === 5 ? "active" : ""}
        onClick={() => setActiveGenre(5)}
      >
        Photography
      </button>
    </div>
  );
};

export default Filter;
