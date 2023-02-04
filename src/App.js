import "./App.css";
import React from 'react';
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboards, OurAim, OurVision } from "./pages/Dashboards";
import {
SegmentationAnalytics,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/SegmentationAnalytics";
import { NextBestActionsManagement, EventsOne, EventsTwo } from "./pages/NextBestActionsManagement";
import NextBestOffersManagement from "./pages/NextBestOffersManagement";
import ModelsandDataSourcesConfiguration from "./pages/ModelsandDataSourcesConfiguration";
function App() {
return (
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/dashboards' element={<Dashboards/>} />
		<Route path='/dashboards/aim' element={<OurAim/>} />
		<Route path='/dashboards/vision' element={<OurVision/>} />
		<Route path='/segmentation-analytics' element={<SegmentationAnalytics/>} />
		<Route path='/segmentation-analytics/services1' element={<ServicesOne/>} />
		<Route path='/segmentation-analytics/services2' element={<ServicesTwo/>} />
		<Route path='/segmentation-analytics/services3' element={<ServicesThree/>} />
		<Route path='/next-best-actions-management' element={<NextBestActionsManagement/>} />
		<Route path='/next-best-offers-management' element={<NextBestOffersManagement/>} />
		<Route path='/next-best-offers-management/events1' element={<EventsOne/>} />
		<Route path='/next-best-offers-management/events2' element={<EventsTwo/>} />
		<Route path='/models-&-data-sources-configuration' element={<ModelsandDataSourcesConfiguration/>} />
	</Routes>
	</Router>
);
}

export default App;


