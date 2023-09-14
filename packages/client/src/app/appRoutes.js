import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound/notFound";

const Home = lazy(() => import("../pages/home/accueil"));
const Blog = lazy(() => import("../pages/blog/blog"));
<<<<<<< HEAD
<<<<<<< HEAD
const Inscription = lazy(() => import("../pages/inscription/inscription"));
=======
const Inscription = lazy(() => import("../pages/inscription/inscription.jsx"));
>>>>>>> 70145443 (install inscription)
=======
const Inscription = lazy(() => import("../pages/inscription/inscription"));
>>>>>>> 1044be11 (Route)

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={withSuspense(Home)} />
        <Route path="/blog" element={withSuspense(Blog)} />
        <Route path="/inscription" element={withSuspense(Inscription)} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
