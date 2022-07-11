const initialState = {
  filters: {
    sortBy: "",
    rating: "",
    search: "",
    categories: [],
    collections: [],
    priceRange: 0,
    genders: [],
  },
  products: [],
  allCategories: [],
  allCollections: [],
  allGenders: [],
  cartlist: [],
  wishlist: [],
  allAddresses: [
    {
      id: "add-1",
      name: "Hrishikesh Barman",
      address: "123 CV Raman Nagar, Bangalore",
      mobile: "1234567890",
      pincode: "560000",
      city: "Bangalore",
      state: "India",
    },
    {
      id: "add-2",
      name: "John Doe",
      address: "44 RT Nagar, Bangalore",
      mobile: "1122334455",
      pincode: "560032",
      city: "Bangalore",
      state: "Karnataka",
    },
  ],
  initialAddressFormData: {
    id: "",
    name: "",
    address: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
  },
  addressFormData: {
    id: "",
    name: "",
    address: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
  },
  toggleAsideFilter: false,
  displayAddressModal: false,
};

const dataReducerFunc = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS_DATA_FROM_SERVER": {
      const maxPrice = action.payload.reduce(
        (acc, curr) => (Number(curr?.price) > acc ? Number(curr?.price) : acc),
        0
      );

      const categoryArr = action.payload.reduce(
        (acc, curr) =>
          acc.includes(curr?.category) ? acc : [...acc, curr?.category],
        []
      );

      const collectionsArr = action.payload.reduce(
        (acc, curr) =>
          acc.includes(curr?.collection) ? acc : [...acc, curr?.collection],
        []
      );

      const genderArr = action.payload.reduce(
        (acc, curr) =>
          acc.includes(curr?.gender) ? acc : [...acc, curr?.gender],
        []
      );

      return {
        ...state,
        products: action.payload.map((el) => {
          return { ...el, inWishlist: false, inCart: false };
        }),
        allCategories: categoryArr,
        allCollections: collectionsArr,
        allGenders: genderArr,
        filters: { ...state.filters, priceRange: maxPrice },
      };
    }

    case "CLEAR_ALL_FILTERS": {
      const maxPrice = state.products.reduce(
        (acc, curr) => (Number(curr?.price) > acc ? Number(curr?.price) : acc),
        0
      );

      return {
        ...state,
        filters: {
          sortBy: "",
          rating: "",
          search: "",
          categories: [],
          collections: [],
          priceRange: maxPrice,
          genders: [],
        },
      };
    }

    case "FILTER_BY_PRICE_RANGE": {
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload },
      };
    }

    case "FILTER_BY_CATEGORY": {
      let res = state.filters.categories.includes(action.payload);

      if (res) {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.filter(
              (el) => el !== action.payload
            ),
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.concat(action.payload),
          },
        };
      }
    }

    case "FILTER_BY_COLLECTION": {
      let res = state.filters.collections.includes(action.payload);

      if (res) {
        return {
          ...state,
          filters: {
            ...state.filters,
            collections: state.filters.collections.filter(
              (el) => el !== action.payload
            ),
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            collections: state.filters.collections.concat(action.payload),
          },
        };
      }
    }

    case "FILTER_BY_RATING": {
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };
    }

    case "FILTER_BY_SORT": {
      if (action.payload === "HIGH_TO_LOW") {
        return {
          ...state,
          filters: { ...state.filters, sortBy: "HIGH_TO_LOW" },
        };
      } else if (action.payload === "LOW_TO_HIGH") {
        return {
          ...state,
          filters: { ...state.filters, sortBy: "LOW_TO_HIGH" },
        };
      }
    }

    case "SET_CART_LIST": {
      return { ...state, cartlist: action.payload };
    }
    case "SET_WISH_LIST": {
      return { ...state, wishlist: action.payload };
    }
    case "TOGGLE_ASIDE_FILTER": {
      return { ...state, toggleAsideFilter: !state.toggleAsideFilter };
    }
    case "TOGGLE_ADDRESS_MODAL": {
      return { ...state, displayAddressModal: !state.displayAddressModal };
    }
    case "ADD_ADDRESS": {
      return {
        ...state,
        allAddresses: [...state.allAddresses, action.payload],
      };
    }
    case "DELETE_ADDRESS": {
      let newAddresses = state.allAddresses.filter(
        (el) => el.id !== action.payload.id
      );
      return { ...state, allAddresses: newAddresses };
    }
    case "SET_ADDRESS": {
      return { ...state, addressFormData: action.payload };
    }
    case "RESET_ADDRESS": {
      return { ...state, addressFormData: state.initialAddressFormData };
    }
    case "EDIT_ADDRESS": {
        console.log(action.payload)
      let index = state.allAddresses.findIndex(
        (el) => el.id === action.payload?.id
      );
      let newAddresssArr = [
        ...state.allAddresses.slice(0, index),
        action.payload,
        ...state.allAddresses.slice(index+1),
      ];
      console.log(newAddresssArr)

      return { ...state, allAddresses: newAddresssArr };
    }

    case "FILTER_BY_SEARCH": {
        return {
          ...state,
          filters: { ...state.filters, search: action.payload },
        };
      }

    default:
      return state;
  }
};

export { initialState, dataReducerFunc };
