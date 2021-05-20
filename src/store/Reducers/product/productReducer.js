import { INITIALIZE_BRANDS } from '../../types';

const initialState = {
  brands: [],
  popularUsedCars: [],
  popularNewCars: [],
  popularPickupTrucks: [],
  popularVans: [],
  popularConvertibles: [],
  popularCoupes: [],
  popularSedans: [],
  popularMinivans: [],
  popularHatchbacks: [],
  popularWagons: [],
  recentTestDrives: [],
  recentPreviews: [],
  carList: [],
  loading: false,
  error: {},
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INITIALIZE_BRANDS:
      return {
        ...state,
        brands: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
