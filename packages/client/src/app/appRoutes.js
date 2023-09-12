import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound/notFound";

const Home = lazy(() => import("../pages/home/accueil"));
const Blog = lazy(() => import("../pages/blog/blog"));
// const profil = lazy(() => import("../pages/profil"));

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={withSuspense(Home)} />
        <Route path="/blog" element={withSuspense(Blog)} />
        {/* <Route path="/profil" element={withSuspense(profil)} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
