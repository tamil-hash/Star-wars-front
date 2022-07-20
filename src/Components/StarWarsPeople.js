import { useState, useEffect, useCallback } from "react";

//components
import Header from "Components/Header";
import SpeciesCount from "./SpeciesCount";
import PeoplesTable from "Components/PeoplesTable";
import ErrorComponent from "Components/ErrorComponent";
import NoDataFound from "./NoDataFound";

//functions
import debounce from "utils/debounce";

const StarWarsPeople = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, total: 0 });
  const [species, setSpecies] = useState({
    total: 0,
    humans: 0,
    droids: 0,
    unknowns: 0,
  });
  const [error, setError] = useState(false);

  //fetches the data from data and stores it in state
  const fetchData = async (searchQuery = "") => {
    try {
      setLoading(true);
      const url = `https://swapi.dev/api/people/?page=${pagination.current}&search=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      setPagination((prevPagination) => ({
        ...prevPagination,
        total: data.count,
      }));
      let humans = 0,
        droids = 0,
        unknowns = 0;
      const newData = data.results.map((eachData) => {
        if (eachData.species.toString().indexOf("1") !== -1) {
          humans++;
          return {
            ...eachData,
            icon: <i className="fa fa-user" aria-hidden="true"></i>,
          };
        } else if (eachData.species.toString().indexOf("2") !== -1) {
          droids++;
          return {
            ...eachData,
            icon: <i className="fa fa-android" aria-hidden="true"></i>,
          };
        } else {
          unknowns++;
          return {
            ...eachData,
            icon: <i className="fa fa-question-circle" aria-hidden="true"></i>,
          };
        }
      });
      setData(newData);
      setSpecies({ total: data.count, humans, droids, unknowns });
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //used debounce to reduce the api call on each change
  const debounceSearch = useCallback(
    debounce((value) => fetchData(value)),
    []
  );

  //will set state on search input change
  const onSearchInputChange = (e) => {
    debounceSearch(e.target.value);
  };

  //change pagination
  const changePagination = (data) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      current: data.current,
    }));
  };

  //call fetchdata on component render and page change
  useEffect(() => {
    fetchData();
  }, [pagination.current]);

  //if any error occurs in the page error component will be shown
  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="container">
      <Header onSearchInputChange={onSearchInputChange} />
      <SpeciesCount species={species} loading={loading} />
      <PeoplesTable
        data={data}
        pagination={pagination}
        loading={loading}
        changePagination={changePagination}
      />
    </div>
  );
};

export default StarWarsPeople;
