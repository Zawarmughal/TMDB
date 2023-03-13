import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PopularMovies from "./pages/PopularMovies";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import UpCommingMovies from "./pages/UpCommingMovies";
import PopularTvShows from "./pages/PopularTvShows";
import People from "./pages/People";
import Detail from "./pages/Detail";
import TopRatedTvShows from "./pages/TopRatedTvShows";
import Error404 from "./pages/Error404";
import MultiSearch from "./pages/MultiSearch";
import TVShowDetail from "./pages/TVShowDetails";


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Error404 />} />

        <Route path="/Movies/">
          <Route path="Popular" element={<PopularMovies />} />
          <Route path="NowPlaying" element={<NowPlayingMovies />} />
          <Route path="UpComming" element={<UpCommingMovies />} />
          <Route path="TopRated" element={<TopRatedMovies />} />
        </Route>

        <Route path="/TvShows/">
          <Route path="Popular" element={<PopularTvShows />} />
          <Route path="TopRated" element={<TopRatedTvShows />} />
        </Route>

        <Route path="/People/">
          <Route path="Peoples" element={<People />} />
        </Route>

        <Route path="/search/:word" element={<MultiSearch />} />

        <Route path="/detail/:id/:name" element={<TVShowDetail />} />
        <Route path="/details/:id/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}
