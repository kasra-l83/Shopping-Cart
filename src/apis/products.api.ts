import { urls } from "./urls"
import { generateClient } from "./client"

export const fetchProductsList= async () =>{
  const client= generateClient();
  const response= await client.get(urls.products.list);
  return response.data;
}