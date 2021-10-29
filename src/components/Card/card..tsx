import {ApiCard} from "../../domain/card";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type Props = {
  card: ApiCard;
};

export function Card({ card }: Props) {
  return (
    <ImageListItem key={card.id}>
      <img
        src={`${card.download_url}?w=248&fit=crop&auto=format`}
        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt='image'
        loading="lazy"
      />
      <ImageListItemBar
        title={card.author}
        subtitle={card.url}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about`}
          >
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
        }
      />
    </ImageListItem>
    // <div>
    //   <p>{card.author}</p>
    //   <img src={card.download_url} alt='image'/>
    // </div>
  )
}
