import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-page d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <h1 className="display-1 fw-bold mb-4 notfound-title">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="mb-4 fs-5">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-light btn-lg px-5 py-3 d-inline-flex align-items-center gap-2">
          <Home size={24} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}