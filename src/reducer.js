const initState = {
  cart: {
    content: [],
    count: 0,
    sum: 0,
  },
  wishlist: {
    content: [],
    count: 0,
  },
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: {
          content: [...state.cart.content, action.el],
          count: state.cart.count + 1,
          sum: 0,
        },
      }
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: {
          content: state.cart.content.filter((el) => el !== action.el),
          count: state.cart.count - 1,
        },
      }
    }

    case 'ADD_TO_WISHLIST': {
      return {
        ...state,
        wishlist: {
          content: [...state.wishlist.content, action.el],
          count: state.wishlist.count + 1,
        },
      }
    }
    case 'REMOVE_FROM_WISHLIST': {
      return {
        ...state,
        wishlist: {
          content: state.wishlist.content.filter((el) => el !== action.el),
          count: state.wishlist.count - 1,
        },
      }
    }
    default:
      return state
  }
}

export function addToCartFromCatalog(id) {
  console.log('***FROM REDUCER:\nid:', id)
  return {
    type: 'ADD_TO_CART',
    el: id,
  }
}
export function deleteFromCartFromCatalog(id) {
  console.log('***FROM REDUCER:\nid:', id)
  return {
    type: 'REMOVE_FROM_CART',
    el: id,
  }
}

export function addToWishlistFromCatalog(id) {
  console.log('***FROM REDUCER:\nid:', id)
  return {
    type: 'ADD_TO_WISHLIST',
    el: id,
  }
}
export function deleteFromWishlistFromCatalog(id) {
  console.log('***FROM REDUCER:\nid:', id)
  return {
    type: 'REMOVE_FROM_WISHLIST',
    el: id,
  }
}

export default reducer
