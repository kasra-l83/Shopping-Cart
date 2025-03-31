import { store } from "./store/store"
import { Provider } from "react-redux"
import { MainLayout } from "./layouts/main"
import { ShoppingCart } from "./pages/Cart"
import { ProductsPage } from "./pages/Products"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const queryClient= new QueryClient();
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<ProductsPage/>}></Route>
      <Route path="/cart" element={<ShoppingCart/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </QueryClientProvider>
  )
}
export default App