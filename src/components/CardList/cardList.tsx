import {Card} from "../Card/card.";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCard} from "../../api/apiCard";
import {State} from "../../store/images";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';

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
    <ImageList >
      <ImageListItem key="Subheader" cols={5}>
        <ListSubheader component="div">Images for life</ListSubheader>
      </ImageListItem>
      {allCards.map((item) => (
        <Card key={item.id} card={item}/>
      ))}
    </ImageList>
  )
}

//   return (
//     <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {allCards.map((item) => {
//         return <Card key={item.id} card={item}/>
//       }
//         </ImageList>
//       )}
//
//     {/*<div>*/}
//     {/*  {allCards.map((card) => {*/}
//     {/*    return <Card card={card}/>*/}
//     {/*  })}*/}
//     {/*</div>*/}
//   )
// }