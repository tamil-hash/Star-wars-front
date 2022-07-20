//components
import SpeciesCard from "./SpeciesCard";

const SpeciesCount = ({ species, loading }) => {
  const speciesData = [
    {
      key: "1",
      title: "Total Species",
      icon: <i className="fa fa-globe fa-2x" aria-hidden="true"></i>,
      count: species.total,
    },
    {
      key: "2",
      title: "Total Humans in the current page",
      icon: <i className="fa fa-user fa-2x" aria-hidden="true"></i>,
      count: species.humans,
    },
    {
      key: "3",
      title: "Total Droid in the current page",
      icon: <i className="fa fa-android fa-2x" aria-hidden="true"></i>,
      count: species.droids,
    },
    {
      key: "4",
      title: "Unknown Species in the current page",
      icon: <i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>,
      count: species.unknowns,
    },
  ];

  return (
    <div className="species-container">
      {speciesData.map(({ title, icon, count, key }) => (
        <SpeciesCard
          key={key}
          title={title}
          icon={icon}
          count={count}
          loading={loading}
        />
      ))}
    </div>
  );
};

export default SpeciesCount;
