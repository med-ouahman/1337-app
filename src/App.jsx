import { BrowserRouter, Routes, Route } from "react-router";


import Homepage from "./pages/homepage/Homepage";
import Questions from "./pages/questions/Questions";
import News from "./pages/news/News";
import Experiences from "./pages/experiences/Experiences"; 
import Login from "./pages/login/Login";
import PageNotFound from "./pages/page-not-found/PageNotFound";

// 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

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
					path="experiences"
					element={<Experiences />}
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