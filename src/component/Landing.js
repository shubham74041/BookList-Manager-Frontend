import { useEffect, useState } from "react";
import Card from "./card";
import NavBar from "./NavBar";
import "./styles.css";
import Pagination from "react-js-pagination";
import axios from "axios";

const itemsCountPerPage = 3;
const LandingPage = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  let [page, setPage] = useState(1);
  const handleChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const inputTextFunc = (inputText) => {
    if (inputText === "") {
      setFilteredData(data);
      return;
    }
    const filterData = data.filter((item) => {
      const data = item.title.toUpperCase();
      if (data.includes(inputText)) {
        return item;
      }
    });
    setFilteredData(filterData);
  };

  const bookListData = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "bookListData", {})
      .then((res) => {
        setData(res?.data?.rows);
        setFilteredData(res?.data?.rows);
      });
  };

  useEffect(() => {
    bookListData();
  }, []);
  return (
    <>
      <NavBar callbackFunc={inputTextFunc} />

      <div className="landingPage-container">
        {filteredData?.length ? (
          filteredData
            .slice((page - 1) * itemsCountPerPage, page * itemsCountPerPage)
            .map((v, index) => {
              return <Card key={index} data={v} />;
            })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <div className="pagination-box">
        <Pagination
          activePage={page}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={filteredData?.length}
          pageRangeDisplayed={3}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default LandingPage;
