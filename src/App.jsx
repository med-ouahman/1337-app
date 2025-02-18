import { BrowserRouter, Routes, Route } from "react-router";


import Homepage from "./pages/homepage/Homepage";
import Questions from "./pages/questions/Questions";
import News from "./pages/news/News";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/page-not-found/PageNotFound";

function App() {

	return (
		<BrowserRouter>
			<Routes>

				<Route
					path="/"
					element={<Homepage />}
				/>

				<Route
					path="/questions"
					element={<Questions />}
				/>

				<Route
					path="/news"
					element={<News />}
				/>

				<Route
					path="/login"
					element={<Login />}
				/>

				<Route
					path="*"
					element={<PageNotFound />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;