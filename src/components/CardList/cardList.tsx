import {Card} from "../Card/card.";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCard} from "../../api/apiCard";
import {State} from "../../store/images";

export function CardList() {
  const dispatch = useDispatch()
  const allCards = useSelector((state: State) => state.images)
  const loadCards = useCallback(() => {
    loadCard()
      .then((res) => {
      dispatch({type: 'loaded', value: res})
    })
      .catch((err) => {
        dispatch({type: 'error', value: err.toString()})
      })
  }, [dispatch])

  useEffect(() => {
    loadCards();
  })

  return (
    <div>
      {allCards.map((card) => {
        return <Card card={card}/>
      })}
    </div>
  )
}