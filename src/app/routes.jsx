import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

// Use alias OR relative; both shown work.
// Using alias (requires vite.config.js alias + server restart):
import { FeedPage } from "@/features/feed";
import { PostPage } from "@/features/post";
import { ProfilePage } from "@/features/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <FeedPage /> },
      { path: "post/:id", element: <PostPage /> },
      { path: "profile/:username", element: <ProfilePage /> },
    ],
  },
]);