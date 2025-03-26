import { MainLayout } from "./layouts/main"
import { ProductsPage } from "./pages/Products"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const queryClient= new QueryClient();
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<ProductsPage/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}
export default App