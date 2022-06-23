import { FilterList } from "../../components/FilterList/FilterList";
import { useState, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Button } from "../../components/Button/Button";
import { CardObj } from "../../store/slices/types";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { imagesRequest } from "../../store/slices/cardsSlice";
import "./style.css";

const filters = ["Show All", "Design", "Branding", "Illustration", "Motion"];

export const AboutPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Show All");
  const { data } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(imagesRequest());
    }
  }, []);

  const filterObj = (arr: CardObj[]) => {
    if (activeFilter === "Show All") {
      return arr;
    } else {
      return arr.filter((item) => item.tag === activeFilter);
    }
  };

  return (
    <section className="cards">
      <div className="container cards__container">
        <FilterList
          filters={filters}
          onChange={(item: string) => setActiveFilter(item)}
          active={activeFilter}
        />
        {data && (
          <Cards
            onChangeFilter={(item: string) => setActiveFilter(item)}
            cards={filterObj(data)}
          />
        )}

        <Button
          onClick={() => dispatch(imagesRequest())}
          text="Load more"
          className="load-button"
        />
      </div>
    </section>
  );
};
