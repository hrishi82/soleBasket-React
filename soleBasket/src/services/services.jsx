import axios from "axios"

export const GetData = async () => axios.get("/api/products");

export const loginServices = async (email, password) =>
  await axios.post('/api/auth/login', {
    email,
    password,
  });


  export const GetCartItems = async ({ encodedToken }) => {
    return await axios.get('/api/user/cart', {
      headers: {
        authorization: encodedToken,
      },
    });
  };

  export const PostCartData = async ({encodedToken, product}) =>{
    return (
      await axios.post("/api/user/cart", {product}, {headers: {authorization: encodedToken}})
    )

  }

  export const IncDecCart = async ({ encodedToken, productId, type }) => {
    return await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: { type },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
  };

  export const DeleteCart = async ({ productId, encodedToken }) => {
    return await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
  };
