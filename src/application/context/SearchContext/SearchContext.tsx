import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const valueContext = useMemo(
    () => ({searchQuery, setSearchQuery}),
    [searchQuery],
  );

  return (
    <SearchContext.Provider value={valueContext}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
