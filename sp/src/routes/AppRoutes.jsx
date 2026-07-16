import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Subjects from "../pages/Subjects";
import Notes from "../pages/Notes";
import AIChat from "../pages/AIChat";
import Flashcards from "../pages/Flashcards";
import Quiz from "../pages/Quiz";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subjects"
        element={
          <ProtectedRoute>
            <Subjects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai"
        element={
          <ProtectedRoute>
            <AIChat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/flashcards"
        element={
          <ProtectedRoute>
            <Flashcards />
          </ProtectedRoute>
        }
      />

      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;