import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number; // memberId
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
    const currentPath = window.location.pathname;

    // 인증 관련 페이지(예: 로그인 페이지)나 public 페이지에 있는 경우
    const publicPaths = [
      '/',
      '/auth/callback',
      '/auth/signup-callback',
      '/auth/kakao'
    ];

    if (!token && !publicPaths.includes(currentPath)) {
      // 토큰이 없는데 보호된 페이지에 접근하려 할 때 로그인 페이지로 리다이렉트
      navigate('/', { replace: true });
      return;
    }

    if (token && publicPaths.includes(currentPath)) {
      // 토큰이 있고, 현재 public 페이지에 있으면 홈으로 리다이렉트
      navigate('/home', { replace: true });
    }
    // 토큰이 있고, 이미 보호된 페이지(ex: /group-list 등)에 있으면 아무 작업도 하지 않음
  }, [navigate]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('is_logged_in', 'true');
    navigate('/home', { replace: true });
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
