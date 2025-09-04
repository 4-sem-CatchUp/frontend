// src/app/routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import { FeedPage } from "@/features/feed";
import { PostPage } from "@/features/post";
import { ProfilePage } from "@/features/profile";

export const router = createBrowserRouter([
  {
    element: <AppLayout />, // wraps all pages with header/footer
    children: [
      { path: "/", element: <FeedPage /> },
      { path: "/post/:id", element: <PostPage /> },
      { path: "/profile/:username", element: <ProfilePage /> },
    ],
  },
]);