import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { loadMessage } from './actions';

export const loadMessageEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
    action$.pipe(
      filter(isActionOf(loadMessage.request)),
      switchMap(action =>
        from(api.demo.loadMessage(action.payload)).pipe(
          map(loadMessage.success),
          catchError((message: string) => of(loadMessage.failure(message)))
        )
      )
    );