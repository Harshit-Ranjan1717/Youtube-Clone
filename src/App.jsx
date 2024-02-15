import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer></MainContainer>,
      },
      {
        path: "/watch",
        element: <WatchPage></WatchPage>,
      },
      {
        path: "/demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
      {
        path: "/search",
        element: (
          <>
            <SearchResult></SearchResult>
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="text-white bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700">
          <Head></Head>
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
      </Provider>
    </>
  );
}
// wow very nice
export default App;
