import "./style.css";
import { useState } from "react";

interface FilterListProps {
  filters: string[];
  onChange: (item: string) => void;
  active: string;
}

export const FilterList: React.FC<FilterListProps> = ({
  filters,
  onChange,
  active,
}) => {
  const [isOpenDropdown, setOpenDropdown] = useState<boolean>(false);

  const itemClick = (item: string) => {
    if (isOpenDropdown) {
      setOpenDropdown(false);
    }
    onChange(item);
  };

  return (
    <div className="filter">
      <div
        className={isOpenDropdown ? "filer-dropdown open" : "filer-dropdown"}
        onClick={() => setOpenDropdown(!isOpenDropdown)}
      >
        <p className="filer-dropdown__text">{active}</p>
      </div>
      <ul className={isOpenDropdown ? "filter-list open" : "filter-list"}>
        {filters.map((item, index) => {
          return (
            <li
              key={index}
              className={
                active === item
                  ? "filter-list__item active"
                  : "filter-list__item"
              }
              onClick={() => itemClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
