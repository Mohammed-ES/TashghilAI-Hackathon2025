import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Brain, User, Settings, LogOut } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TashghilAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/dashboard') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/missions"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/missions') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Missions
            </Link>
            <Link
              to="/tasks"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/tasks') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Tasks
            </Link>
            <Link
              to="/interview-simulator"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/interview-simulator') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Interview Simulator
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
            {/* User Menu (when logged in) */}
            <div className="flex items-center space-x-2">
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/missions"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Missions
              </Link>
              <Link
                to="/tasks"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Tasks
              </Link>
              <Link
                to="/interview-simulator"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Interview Simulator
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

