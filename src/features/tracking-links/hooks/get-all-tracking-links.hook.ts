import { useQuery } from '@tanstack/react-query';
import { TrackingLink } from '../tracking-links.types';
import { useEffect, useReducer } from 'react';

interface State {
  data: TrackingLink[];
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
}

interface Action {
  type: string;
  payload?: TrackingLink[];
}

export default function useGetAllTrackingLinks() {
  // const [trackingLinks, dispatch] = useReducer(
  //   (state: State, action: Action): State => {
  //     switch (action.type) {
  //       case 'pending': {
  //         return {
  //           ...state,
  //           isLoading: true,
  //         };
  //       }
  //       case 'resolved': {
  //         return {
  //           ...state,
  //           data: action.payload ?? [],
  //           isLoading: false,
  //           isFetched: true,
  //         };
  //       }
  //       case 'rejected': {
  //         return {
  //           ...state,
  //           isLoading: false,
  //           isError: true,
  //           isFetched: true,
  //         };
  //       }
  //       default: {
  //         return state;
  //       }
  //     }
  //   },
  //   {
  //     data: [],
  //     isLoading: false,
  //     isError: false,
  //     isFetched: false,
  //   }
  // );

  // useEffect(() => {
  //   dispatch({ type: 'pending' });

  //   fetch('/api/tracking-links')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: 'resolved',
  //         payload: data,
  //       });
  //     })
  //     .catch((e) => {
  //       dispatch({ type: 'rejected' });
  //     });
  // }, []);

  // return trackingLinks;

  return useQuery({
    queryKey: ['tracking-links'],
    queryFn: function (): Promise<TrackingLink[]> {
      return fetch('/api/tracking-links').then((res) => res.json());
    },
  });
}
