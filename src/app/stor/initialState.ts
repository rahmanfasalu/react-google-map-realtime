import { AppStateType } from "../interfaces/app.state.type";

// Initial app state
const initialState: AppStateType = {
  stationsInfo: [],
  stationsStatus: {
    entities: {},
    ids: [],
    loading: false,
  },
};

export default initialState;
