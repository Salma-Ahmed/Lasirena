import { createStore } from "redux";
import axios from "axios";
import {
  getSelectedCategoryProducts,
  getSelectedCategoryProductsFilteredByColor,
  getSelectedCategoryProductsFilteredByPrice,
  getSelectedCategoryProductsFilteredByRating,
  getSelectedCategoryProductsFilteredByColorAndPrice,
  getSelectedCategoryProductsFilteredByColorAndRating,
  getSelectedCategoryProductsFilteredByPriceAndRating,
  getSelectedCategoryProductsFilteredByPriceAndRatingAndColor
} from "./filters";

const initialState = {
  products: [],
  selectedCategoryProducts: [],
  categoryId: 1,
  min: null,
  max: null,
  rangeResetValues: [0, 1000],
  colors: [],
  rating: null,
  action: null
};

axios.get("http://test-api.edfa3ly.io/product").then(response => {
  initialState.products = response.data;
});
const Store = createStore((state = initialState, action) => {
  if (action.type === "FILTER_BY_CATEGORY") {
    return {
      ...state,
      selectedCategoryProducts: getSelectedCategoryProducts(
        state.products,
        action.categoryId
      ),
      categoryId: action.categoryId,
      min: null,
      max: null,
      rangeResetValues: [0, 1000],
      colors: [],
      rating: null,
      action: action.type
    };
  }
  if (action.type === "FILTER_CATEGORY_BY_PRICE") {
    if (
      state.rating != null &&
      (state.colors.length !== 0 && state.colors.length > 0)
    ) {
      console.log("price and rating and color");
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByPriceAndRatingAndColor(
          state.products,
          state.categoryId,
          state.colors,
          state.rating,
          action.min,
          action.max
        ),
        min: action.min,
        max: action.max,
        action: action.type
      };
    } else if (state.rating != null) {
      console.log("price and rating");
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByPriceAndRating(
          state.products,
          state.categoryId,
          action.min,
          action.max,
          state.rating
        ),
        min: action.min,
        max: action.max,
        action: action.type
      };
    } else if (state.colors.length !== 0 && state.colors.length > 0) {
      console.log("price and colors");
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByColorAndPrice(
          state.products,
          state.categoryId,
          state.colors,
          action.min,
          action.max
        ),
        min: action.min,
        max: action.max,
        action: action.type
      };
    } else {
      console.log("price only");
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByPrice(
          state.products,
          state.categoryId,
          action.min,
          action.max
        ),
        min: action.min,
        max: action.max,
        action: action.type
      };
    }
  }
  if (action.type === "FILTER_CATEGORY_BY_RATING") {
    if (
      state.min != null &&
      state.max != null &&
      (state.colors.length !== 0 && state.colors.length > 0)
    ) {
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByPriceAndRatingAndColor(
          state.products,
          state.categoryId,
          state.colors,
          action.rating,
          state.min,
          state.max
        ),
        rating: action.rating,
        action: action.type
      };
    } else if (state.min != null && state.max != null) {
      console.log("rating and price");
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByPriceAndRating(
          state.products,
          state.categoryId,
          state.min,
          state.max,
          action.rating
        ),
        rating: action.rating,
        action: action.type
      };
    } else if (state.colors.length !== 0 && state.colors.length > 0) {
      console.log("rating and color");
      console.log(state.colors.length);
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByColorAndRating(
          state.products,
          state.categoryId,
          state.colors,
          action.rating
        ),
        rating: action.rating,
        action: action.type
      };
    } else {
      console.log("rating only");
      return {
        ...state,
        selectedCategoryProducts: getSelectedCategoryProductsFilteredByRating(
          state.products,
          state.categoryId,
          action.rating
        ),
        rating: action.rating,
        action: action.type
      };
    }
  }
  if (action.type === "FILTER_CATEGORY_BY_COLOR") {
    console.log(action.clear);
    if (action.clear !== true) {
      if (action.checked === true) {
        state.colors.push(action.color);
        console.log(state.colors.length);
      } else {
        const index = state.colors.findIndex(color => color === action.color);
        const part1 = state.colors.slice(0, index);
        const part2 = state.colors.slice(index + 1, state.colors.length);
        state.colors = [...part1, ...part2];
        // console.log(state.colors);
      }
    } else {
      state.colors = [];
    }

    if (state.rating != null && (state.min != null && state.max != null)) {
      console.log("color(if not 0) , rating and price");
      if (state.colors.length === 0 || action.clear === true) {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByPriceAndRating(
            state.products,
            state.categoryId,
            state.min,
            state.max,
            state.rating
          ),
          colors: state.colors,
          action: action.type
        };
      } else {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByPriceAndRatingAndColor(
            state.products,
            state.categoryId,
            state.colors,
            state.rating,
            state.min,
            state.max
          ),
          colors: state.colors,
          action: action.type
        };
      }
    } else if (state.rating != null) {
      console.log("color and rating ");
      if (state.colors.length === 0 || action.clear === true) {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByRating(
            state.products,
            state.categoryId,
            state.rating
          ),
          colors: state.colors,
          action: action.type
        };
      } else {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByColorAndRating(
            state.products,
            state.categoryId,
            state.colors,
            state.rating
          ),
          colors: state.colors,
          action: action.type
        };
      }
    } else if (state.min != null && state.max != null) {
      console.log("color and  price");
      if (state.colors.length === 0 || action.clear === true) {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByPrice(
            state.products,
            state.categoryId,
            state.min,
            state.max
          ),
          colors: state.colors,
          action: action.type
        };
      } else {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByColorAndPrice(
            state.products,
            state.categoryId,
            state.colors,
            state.min,
            state.max
          ),
          colors: state.colors,
          action: action.type
        };
      }
    } else {
      console.log("color only");
      if (state.colors.length === 0 || action.clear === true) {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProducts(
            state.products,
            state.categoryId
          ),
          colors: state.colors,
          action: action.type
        };
      } else {
        return {
          ...state,
          selectedCategoryProducts: getSelectedCategoryProductsFilteredByColor(
            state.products,
            state.categoryId,
            state.colors
          ),
          colors: state.colors,
          action: action.type
        };
      }
    }
  }

  return state;
});

export default Store;
