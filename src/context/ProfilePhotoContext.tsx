import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfilePhotoContextType {
  photoUrl: string;
  updatePhoto: (newUrl: string) => void;
  resetPhoto: () => void;
  isCustomPhoto: boolean;
}

const DEFAULT_PHOTO_URL = '/yumna.jpg';
const STORAGE_KEY = 'yumna_portfolio_avatar';

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoUrl: DEFAULT_PHOTO_URL,
  updatePhoto: () => {},
  resetPhoto: () => {},
  isCustomPhoto: false,
});

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
    } catch {
      // Local storage unavailable
    }
    return DEFAULT_PHOTO_URL;
  });

  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const updatePhoto = (newUrl: string) => {
    setPhotoUrl(newUrl);
    setIsCustomPhoto(true);
    try {
      localStorage.setItem(STORAGE_KEY, newUrl);
    } catch (e) {
      console.error('Failed to save avatar to localStorage:', e);
    }
  };

  const resetPhoto = () => {
    setPhotoUrl(DEFAULT_PHOTO_URL);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear avatar from localStorage:', e);
    }
  };

  return (
    <ProfilePhotoContext.Provider value={{ photoUrl, updatePhoto, resetPhoto, isCustomPhoto }}>
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
