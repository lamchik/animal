import {loadCard} from "../../api/apiCard";
import {ApiCard} from "../../domain/card";

type Props = {
  card: ApiCard;
};

export function Card({ card }: Props) {
  return (
    <div>
      <p>{card.author}</p>
      <img src={card.download_url} alt='image'/>
    </div>
  )
}
