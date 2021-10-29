import {ApiCard} from "../domain/card";

export type State = {
  images: ApiCard[],
  error?: string;
}

type ActionImagesLoaded = {
  type: 'loaded',
  value: ApiCard[]
}

const defaultState: State = {
  images: [],
}

export type Action = ActionImagesLoaded

export const
  Reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case 'loaded':
      return {...state, images: action.value}
    default:
      return state
  }
}