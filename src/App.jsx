
import { BrowserRouter, Routes, Route } from "react-router";


import "./index.css";



import Homepage from "./pages/homepage/Homepage";
import Questions from "./pages/questions/Questions";
import News from "./pages/news/News";
import Experiences from "./pages/experiences/Experiences"; 
import Login from "./pages/login/Login";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import GlobalContextProvider from "./contexts/GlobalContext";
import FAQ from "./pages/FAQ/FAQ"

// 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

function App() {


	return (
		<GlobalContextProvider>

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
					path="/FAQ"
					element={<FAQ />}
				/>
				<Route
					path="*"
					element={<PageNotFound />}
				/>

			</Routes>
		</BrowserRouter>
		</GlobalContextProvider>
	);

}

export default App;