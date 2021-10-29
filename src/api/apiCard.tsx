import {ApiCard} from "../domain/card";

export const loadCard = (): Promise<ApiCard[]> => {
  return fetch('https://picsum.photos/v2/list', {
    method: "GET"
  })
    .then((res) => {
      return res.json()
    }).catch((err) => {
      console.log(err)
    })
}


export {}