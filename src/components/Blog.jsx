import { Navigate } from "react-router-dom";

export default function Blog() {
  // Redirect to the blog page
  return <Navigate to="/blog" replace />;
}