import { AppStateType } from "../interfaces/app.state.type";

const initialState: AppStateType = {
  stationsInfo: [],
  stationsStatus: {
    entities: {},
    ids: [],
    loading: false,
  },
};

export default initialState;
