import { combineEpics } from 'redux-observable';

import * as demoEpics from './demo/epics';

export default combineEpics(...Object.values(demoEpics));