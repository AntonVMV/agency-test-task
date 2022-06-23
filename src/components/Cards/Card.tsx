import { CardObj } from "../../store/slices/types";
import "./style.css";
import React from "react";

interface CardProps {
  card: CardObj;
  onCardSelect: () => void;
  onTagClick: () => void;
  isActive: boolean;
}

export const Card: React.FC<CardProps> = ({
  card,
  onTagClick,
  isActive,
  onCardSelect,
}) => {
  const tagClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onTagClick();
  };

  return (
    <li className={isActive ? "card active" : "card"} onClick={onCardSelect}>
      <img src={card.image} alt="card" className="card__image" />
      <div className="card__description">
        <div onClick={tagClick} className="card__tag">
          {card.tag}
        </div>
        <h3 className="card__title">{card.title}</h3>
      </div>
    </li>
  );
};
