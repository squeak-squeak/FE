import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  nickname: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('로컬 스토리지 파싱 중 오류 발생:', error);
      localStorage.removeItem('user'); // 잘못된 데이터를 삭제
      return null;
    }
  });

  const isLoggedIn = !!localStorage.getItem('jwt_token');

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');

    if (token) {
      navigate('/mypage', { replace: true });
    } else if (
      !token &&
      window.location.pathname !== '/auth/callback' &&
      window.location.pathname !== '/auth/signup-callback'
    ) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('is_logged_in', 'true');
    navigate('/mypage', { replace: true });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('is_logged_in');
    navigate('/', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내에서 사용해야 합니다.');
  }
  return context;
};
