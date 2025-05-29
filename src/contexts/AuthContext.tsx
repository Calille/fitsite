'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface User {
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  sessionTimeLeft: number;
  extendSession: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials - in production this would be handled by backend
const DEMO_CREDENTIALS = {
  email: 'admin@tphealthfitness.com',
  password: 'admin123',
  user: {
    email: 'admin@tphealthfitness.com',
    name: 'Admin User',
    role: 'admin'
  }
};

// Session configuration
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
const REMEMBER_ME_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const WARNING_TIME = 5 * 60 * 1000; // Show warning 5 minutes before logout

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0);
  const [sessionTimeout, setSessionTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activityTimeout, setActivityTimeout] = useState<NodeJS.Timeout | null>(null);

  // Clear all timeouts
  const clearTimeouts = useCallback(() => {
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
      setSessionTimeout(null);
    }
    if (activityTimeout) {
      clearTimeout(activityTimeout);
      setActivityTimeout(null);
    }
  }, [sessionTimeout, activityTimeout]);

  // Logout function
  const logout = useCallback(() => {
    clearTimeouts();
    setIsAuthenticated(false);
    setUser(null);
    setSessionTimeLeft(0);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('session_expiry');
    localStorage.removeItem('remember_me');
    
    // Log activity
    const activities = JSON.parse(localStorage.getItem('admin_activities') || '[]');
    activities.push({
      action: 'logout',
      timestamp: new Date().toISOString(),
      user: user?.email || 'unknown'
    });
    localStorage.setItem('admin_activities', JSON.stringify(activities.slice(-50))); // Keep last 50 activities
  }, [clearTimeouts, user]);

  // Extend session
  const extendSession = useCallback(() => {
    const newExpiry = Date.now() + SESSION_TIMEOUT;
    localStorage.setItem('session_expiry', newExpiry.toString());
    setSessionTimeLeft(SESSION_TIMEOUT);
    
    // Clear existing timeout and set new one
    clearTimeouts();
    
    const timeout = setTimeout(() => {
      logout();
    }, SESSION_TIMEOUT);
    
    setSessionTimeout(timeout);
  }, [clearTimeouts, logout]);

  // Track user activity
  const trackActivity = useCallback(() => {
    if (isAuthenticated) {
      extendSession();
    }
  }, [isAuthenticated, extendSession]);

  // Setup activity listeners
  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const throttledTrackActivity = (() => {
      let lastCall = 0;
      return () => {
        const now = Date.now();
        if (now - lastCall >= 60000) { // Throttle to once per minute
          lastCall = now;
          trackActivity();
        }
      };
    })();

    if (isAuthenticated) {
      events.forEach(event => {
        document.addEventListener(event, throttledTrackActivity, true);
      });
    }

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, throttledTrackActivity, true);
      });
    };
  }, [isAuthenticated, trackActivity]);

  // Update session countdown
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      const expiry = localStorage.getItem('session_expiry');
      if (expiry) {
        const timeLeft = parseInt(expiry) - Date.now();
        if (timeLeft <= 0) {
          logout();
        } else {
          setSessionTimeLeft(timeLeft);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated, logout]);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      const userData = localStorage.getItem('auth_user');
      const sessionExpiry = localStorage.getItem('session_expiry');
      const rememberMe = localStorage.getItem('remember_me') === 'true';

      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          const now = Date.now();
          
          if (sessionExpiry) {
            const expiryTime = parseInt(sessionExpiry);
            
            if (now > expiryTime) {
              // Session expired
              if (rememberMe) {
                // Extend session if remember me is enabled
                extendSession();
                setIsAuthenticated(true);
                setUser(parsedUser);
              } else {
                logout();
              }
            } else {
              // Session still valid
              setIsAuthenticated(true);
              setUser(parsedUser);
              setSessionTimeLeft(expiryTime - now);
              
              // Set timeout for remaining time
              const timeout = setTimeout(() => {
                logout();
              }, expiryTime - now);
              setSessionTimeout(timeout);
            }
          } else {
            // No expiry set, create one
            extendSession();
            setIsAuthenticated(true);
            setUser(parsedUser);
          }
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          logout();
        }
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, [extendSession, logout]);

  // Login function
  const login = async (email: string, password: string, rememberMe = false): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate credentials
      if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
        const token = `demo_token_${Date.now()}`;
        const expiry = Date.now() + SESSION_TIMEOUT;
        
        // Store authentication data
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(DEMO_CREDENTIALS.user));
        localStorage.setItem('session_expiry', expiry.toString());
        
        if (rememberMe) {
          localStorage.setItem('remember_me', 'true');
        } else {
          localStorage.removeItem('remember_me');
        }
        
        setIsAuthenticated(true);
        setUser(DEMO_CREDENTIALS.user);
        setSessionTimeLeft(SESSION_TIMEOUT);
        
        // Set session timeout
        const timeout = setTimeout(() => {
          logout();
        }, SESSION_TIMEOUT);
        setSessionTimeout(timeout);
        
        // Log activity
        const activities = JSON.parse(localStorage.getItem('admin_activities') || '[]');
        activities.push({
          action: 'login',
          timestamp: new Date().toISOString(),
          user: email,
          rememberMe
        });
        localStorage.setItem('admin_activities', JSON.stringify(activities.slice(-50)));
        
        setIsLoading(false);
        return true;
      } else {
        // Log failed attempt
        const activities = JSON.parse(localStorage.getItem('admin_activities') || '[]');
        activities.push({
          action: 'failed_login',
          timestamp: new Date().toISOString(),
          user: email
        });
        localStorage.setItem('admin_activities', JSON.stringify(activities.slice(-50)));
        
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, [clearTimeouts]);

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading,
    sessionTimeLeft,
    extendSession
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 