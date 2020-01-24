import {
    FETCH_NEARBY_SHOPS_BEGIN, FETCH_NEARBY_SHOPS_SUCCESS, FETCH_NEARBY_SHOPS_ERROR,
    FETCH_PREFERRED_SHOPS_BEGIN, FETCH_PREFERRED_SHOPS_SUCCESS, FETCH_PREFERRED_SHOPS_ERROR,
    LIKE_SHOP_SUCCESS, LIKE_SHOP_ERROR,
    DISLIKE_SHOP_SUCCESS, DISLIKE_SHOP_ERROR, DISLIKE_SHOP_END,
    REMOVE_SHOP_SUCCESS, REMOVE_SHOP_ERROR
} from "../actions/shopActions";

const initState = {
    nearbyShops: {
        loading: false,
        shops: [],
        error: null
    },
    preferredShops: {
        loading: false,
        shops: [],
        error: null
    }
};

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_NEARBY_SHOPS_BEGIN:
            console.log(FETCH_NEARBY_SHOPS_BEGIN);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: [],
                    loading: true
                }
            };
        case FETCH_NEARBY_SHOPS_SUCCESS:
            console.log(FETCH_NEARBY_SHOPS_SUCCESS);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: action.payload,
                    loading: false
                }
            };
        case FETCH_NEARBY_SHOPS_ERROR:
            console.log(FETCH_NEARBY_SHOPS_ERROR);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: [],
                    error: action.payload
                }
            };
        case FETCH_PREFERRED_SHOPS_BEGIN:
            console.log(FETCH_PREFERRED_SHOPS_BEGIN);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: [],
                    loading: true
                }
            };
        case FETCH_PREFERRED_SHOPS_SUCCESS:
            console.log(FETCH_PREFERRED_SHOPS_SUCCESS);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: action.payload,
                    loading: false
                }
            };
        case FETCH_PREFERRED_SHOPS_ERROR:
            console.log(FETCH_PREFERRED_SHOPS_ERROR);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: [],
                    error: action.payload
                }
            };
        case LIKE_SHOP_SUCCESS:
            console.log(LIKE_SHOP_SUCCESS, action.payload.name);
            const remained_nearbyShops = state.nearbyShops.shops.filter(item => item !== action.payload);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: remained_nearbyShops
                }
            };
        case LIKE_SHOP_ERROR:
            console.log(LIKE_SHOP_ERROR, action.payload);
            return state;
        case REMOVE_SHOP_SUCCESS:
            console.log(REMOVE_SHOP_SUCCESS, action.payload.name);
            const remained_preferredShops = state.preferredShops.shops.filter(item => item !== action.payload);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: remained_preferredShops
                }
            };
        case REMOVE_SHOP_ERROR:
            console.log(REMOVE_SHOP_ERROR, action.payload);
            return state;
        case DISLIKE_SHOP_SUCCESS:
            console.log(DISLIKE_SHOP_SUCCESS);
            const aa = state.nearbyShops.shops.filter(item => item !== action.payload);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: aa
                }
            };
        case DISLIKE_SHOP_ERROR:
            console.log(DISLIKE_SHOP_ERROR, action.payload);
            return state;
        case DISLIKE_SHOP_END:
            console.log(DISLIKE_SHOP_END);
            let shopsAfterDisliking = state.nearbyShops.shops;
            shopsAfterDisliking.push(action.payload);

            // sorting based on distance
            shopsAfterDisliking.sort((a,b)=> a.distance-b.distance);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: [...shopsAfterDisliking]
                }
            };
        default:
            return state;
    }
};

export default shopReducer;