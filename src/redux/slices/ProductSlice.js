import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
// import axios from 'axios';

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch("https://anandamela-server.herokuapp.com/products")
      .then((res) => res.json())
    return response;
  }
)
export const fetchAllOrders = createAsyncThunk(
  'order/fetchAllOrders',
  async () => {
    const response = await fetch("http://localhost:5000/orders")
      .then(res => res.json())
    return response;
  }
)
export const postOrder = createAsyncThunk(
  'product/postOrder',
  async (data) => {
    const response = await axios.post("http://localhost:5000/order", data)
      .then(res => {
        if (res.data.insertedId) {
          toast.success('Booking Succesful')
        }
      })
    return response;
  }
)
export const putAdmin = createAsyncThunk(
  'user/putAdmin',
  async (data) => {
    const response = await axios.put("http://localhost:5000/user/admin", data)
      .then(res => {
        if (res.data.modifiedCount) {
          console.log(data);
          toast.success('Made admin')
        }
        else {
          toast.error('Please Enter Valid Email')
        }
      })
    return response;
  }
);
export const postNewProduct = createAsyncThunk(
  'product/postNewProduct',
  async (data) => {
    const response = await axios.post("http://localhost:5000/products", data)
      .then(res => {
        if (res.data.insertedId) {
          toast.success('New Product Succesfully Added')
        }
      })
    return response;
  }
)
export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (id) => {
    const response = await axios.delete(`http://localhost:5000/deleteOrder/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          toast.success('Order Cancel')
        }
      })
    return response;
  }
)
export const deleteProduct = createAsyncThunk(
  'product/deleteProuct',
  async (id) => {
    const response = await axios.delete(`http://localhost:5000/deleteProduct/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          toast.success('Product Deleted')
          .catch(err => {
            swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
        })
        }
        
      })
    return response;
  }
)

export const fetchOrder = createAsyncThunk(
  'order/fetchOrder',
  async (email) => {
    const response = await fetch(`http://localhost:5000/order/${email}`)
      .then(res => res.json())
    return response;
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    cartList: [],
    checkoutList: [],
    completeOrder: [],
    myOrder: [],
    user: [],
    allOrders: [],
    loading: true
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload)
    },
    addToCheckoutList: (state, action) => {
      state.checkoutList.push(action.payload)
      console.log(action)
    },
    removeFromCheckout: (state, action) => {
      // state.checkoutList = state.checkoutList.filter(product => product._id !== action.payload)
      // state.checkoutList.push(action.payload)
      state.checkoutList = []
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(product => product._id !== action.payload)
    },
    addToOrderList: (state, action) => {
      // state.cartList = state.cartList.filter(product => product._id !== action.payload)
      state.completeOrder.push(action.payload);

    },
    removeFromOrder: (state, action) => {
      state.myOrder = state.myOrder.filter(product => product._id !== action.payload)
    },
    removeFromProduct: (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      if(fetchProducts.pending){
        state.loading = false
      }
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = action.payload;
    });
    builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
      // Add user to the state array
      state.allOrders = action.payload;
    });
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.cartList = state.cartList.filter(product => product._id !== action.payload)
      // state.completeOrder.push(action.payload);
    });
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      // Add user to the state array
      state.myOrder = action.payload;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.myOrder = state.myOrder.filter(product => product._id !== action.payload)
      // state.myOrder.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload)
      // state.myOrder.push(action.payload);
    });
    builder.addCase(postNewProduct.fulfilled, (state, action) => {
      // state.cartList = state.cartList.filter(product => product._id !== action.payload)
      state.products.push(action.payload);
    });
    builder.addCase(putAdmin.fulfilled, (state, action) => {
      // state.cartList = state.cartList.filter(product => product._id !== action.payload)
      state.user.push(action.payload);
    });
  },

})

export const { addToCart,addToCheckoutList, removeFromCart,removeFromCheckout, removeFromProduct, addToOrderList, removeFromOrder } = productSlice.actions;

export default productSlice.reducer;