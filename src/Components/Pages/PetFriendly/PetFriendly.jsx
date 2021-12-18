import styled from "styled-components";
import { ScrollNavbar } from "../../Header/ScrollNavbar";
import { CuisinesFilter } from "./CuisinesFilter";
import { Filters } from "./Filters";
import { PetFriendlyCard } from "./PetFriendlyCard";
import { PetFriendlyHeading } from "./PetFriendlyHeading";
import { useSelector } from "react-redux";
import { TagsFilter } from "./TagsFilter";
import Footer from "../../Footer/Footer";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  getRestaurantError,
  getRestaurantsLoading,
  getRestaurantsSuccess,
} from "../../../Redux/Restaurants/action";
const PetStyle = styled.div`
  width: 100%;
  padding-top: 2px;
  min-height: 1004px;
  padding-bottom: 50px;
  background: #f3f3f3;
  .PetStyle_main_div {
    width: 85%;
    margin: auto;
    margin-top: 40px;
    display: flex;
    gap: 20px;
    .petStyle_filters_div {
      display: flex;
      flex-direction: column;
      gap: 3px;
      .bottom-para-pet1 {
        margin-top: 30px;
        width: 226px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #797979;
      }
      .bottom-para-pet {
        font-size: 14px;
        font-weight: 400;
        width: 226px;
        line-height: 20px;
        color: #797979;
      }
    }
    .PetStyle_cards_div {
      width: 100%;
      .petStyle_location_div {
        display: flex;
        align-items: center;
        gap: 6px;
        p {
          font-size: 12px;
          line-height: 16px;
          color: #797979;
        }
      }
    }
    .petfriendly-sort {
      margin-top: 24px;
      display: flex;
      margin-bottom: 40px;
      justify-content: space-between;
      h1 {
        height: 60px;
        width: 553px;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #333333;
      }
      div {
        width: 230px;
        display: flex;
        align-items: center;
        gap: 5px;
        div {
          display: flex;
          align-items: center;
          font-size: 14px;
          line-height: 20px;
          color: #333333;
        }
        .pet-select-div {
          height: 40px;
          min-width: 174px;
          border-radius: 4px;
          background: #ffffff;
          padding: 8px;
          border: none;
          select {
            width: 100%;
            border: none;
          }
        }
      }
    }
  }
  .wrapDiv {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const PetFriendly = () => {
  const [oldData, setOldData] = useState();
  const [newData, setNewData] = useState();
  const params = useParams();
  useEffect(async () => {
    const { data } = await axios.get(
      "https://dineout-clone.herokuapp.com/restaurants"
    );
    if (params.id === "buffet") {
      const abc = data.items.filter((e) => {
        return e.buffet === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "trending") {
      const abc = data.items.filter((e) => {
        return e.trending === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "petFriendly") {
      const abc = data.items.filter((e) => {
        return e.petFriendly === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "dineoutPay") {
      const abc = data.items.filter((e) => {
        return e.dineoutPay === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "familyTime") {
      const abc = data.items.filter((e) => {
        return e.familyTime === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "pureVeg") {
      const abc = data.items.filter((e) => {
        return e.pureVeg === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "northIndian") {
      const abc = data.items.filter((e) => {
        return e.northIndian === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else if (params.id === "bestBars") {
      const abc = data.items.filter((e) => {
        return e.bestBars === true;
      });
      setOldData(abc);
      setNewData(abc);
    } else {
      setOldData(data.items);
      setNewData(data.items);
    }
  }, []);
  const handleIt = (type, bool) => {
    if (bool) {
      setOldData(newData);
      return;
    }
    if (type === "chinese") {
      const data = newData.filter((e) => {
        return e.chinese === true;
      });
      setOldData(data);
    } else if (type === "italian") {
      const data = newData.filter((e) => {
        return e.italian === true;
      });
      setOldData(data);
    } else if (type === "fastFood") {
      const data = newData.filter((e) => {
        return e.fastFood === true;
      });
      setOldData(data);
    } else if (type === "continental") {
      const data = newData.filter((e) => {
        return e.continental === true;
      });
      setOldData(data);
    } else setOldData(newData);
  };
  return !oldData ? (
    <>
      <ScrollNavbar />
      <PetStyle>
        <div className="PetStyle_main_div">
          <div className="petStyle_filters_div">
            <Filters />
            <CuisinesFilter handleFilter={handleIt} />
            <TagsFilter />
            <Filters />
            <p className="bottom-para-pet1">Top 10 Restrauns in Kolkata</p>
            <p className="bottom-para-pet">
              Pedegree Sponserd Restraunts Near Me
            </p>
          </div>
          <div className="PetStyle_cards_div">
            <PetFriendlyHeading />
            <div className="wrapDiv">
              <Link to={`/restaurants/`}>
                <PetFriendlyCard image="https://media2.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif?cid=ecf05e47818udk66mz1cn0y2jojpap3y48wm221vtetw8g9z&rid=giphy.gif&ct=g" />
              </Link>
            </div>
          </div>
        </div>
      </PetStyle>
      <Footer />
    </>
  ) : (
    <>
      <ScrollNavbar />
      <PetStyle>
        <div className="PetStyle_main_div">
          <div className="petStyle_filters_div">
            <Filters />
            <CuisinesFilter handleFilter={handleIt} />
            <TagsFilter />
            <Filters />
            <p className="bottom-para-pet1">Top 10 Restrauns in Kolkata</p>
            <p className="bottom-para-pet">
              Pedegree Sponserd Restraunts Near Me
            </p>
          </div>
          <div className="PetStyle_cards_div">
            <PetFriendlyHeading />
            <div className="wrapDiv">
              {oldData.map((e) => (
                <Link key={e._id} to={`/restaurants/${e._id}`}>
                  <PetFriendlyCard
                    name={e.name}
                    image={e.img}
                    location={e.city}
                    locality={e.locality}
                    rating={e.rating}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PetStyle>
      <Footer />
    </>
  );
  // }
  // return <div>No Data found</div>;
};
