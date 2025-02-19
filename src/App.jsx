import { BrowserRouter, Routes, Route } from "react-router";


import Homepage from "./pages/homepage/Homepage";
import FAQ from "./pages/FAQ/FAQ";
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
					path="/FAQ"
					element={<FAQ />}
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