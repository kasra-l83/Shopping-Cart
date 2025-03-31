import { store } from "./redux/store"
import { Provider } from "react-redux"
import { NotFound } from "./pages/NotFound"
import { MainLayout } from "./layouts/main"
import { ShoppingCart } from "./pages/Cart"
import { ProductsPage } from "./pages/Products"
import { Registration } from "./pages/Registration"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const queryClient= new QueryClient();
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} errorElement={<ErrorBoundary/>}>
      <Route index={true} element={<ProductsPage/>}></Route>
      <Route path="/cart" element={<ShoppingCart/>}></Route>
      <Route path="/registration" element={<Registration/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
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