import { Link } from 'components/Layout/Layout.styled';
import { useAuth } from 'hooks/useAuth';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <>
          <Link to="/contacts">Contacts</Link>
          <Link to="/menu">Menu</Link>
        </>
      ) : (
        <>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </>
  );
}
