import { Card } from "./Card";
import { CardObj } from "../../store/slices/types";
import { removeCard } from "../../store/slices/cardsSlice";
import { useAppDispatch } from "../../hooks/storeHooks";
import React, { useEffect, useState } from "react";

interface CardsProps {
  onChangeFilter: (item: string) => void;
  cards: CardObj[];
}

export const Cards: React.FC<CardsProps> = ({ onChangeFilter, cards }) => {
  const [selectedCard, setSelectedCard] = useState<CardObj | null>(null);
  const dispatch = useAppDispatch();

  // Немного не понял тут. Нужно ли было иметь возможность выделить несколько карточек или только одну. Поэтому
  // оставил одну. Для выбора нескольких написал бы бы почти то же самое, только хранил массив выбраных и при удалени проходил бы
  // циклом и так же удалял.
  const selectCard = (item: CardObj) => {
    if (item.id === selectedCard?.id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(item);
    }
  };

  useEffect(() => {
    const deleteCard = (e: KeyboardEvent) => {
      if (e.key === "Delete" && selectedCard) {
        dispatch(removeCard(selectedCard.id));
      }
    };
    document.addEventListener("keydown", deleteCard);

    return () => document.removeEventListener("keydown", deleteCard);
  }, [selectedCard, dispatch]);

  return (
    <ul className="cards__list">
      {cards.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Card
              card={item}
              onTagClick={() => onChangeFilter(item.tag)}
              onCardSelect={() => selectCard(item)}
              isActive={selectedCard?.id === item.id}
            />
          </React.Fragment>
        );
      })}
    </ul>
  );
};
