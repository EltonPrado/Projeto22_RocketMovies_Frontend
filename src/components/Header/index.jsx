import { Link, useNavigate } from "react-router-dom";

import avatarPlaceholder from '../../assets/avatar_placeholder.png';
import { api } from '../../services/api';
import { Wrapper } from "../../components/Wrapper";
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Logout } from "./styles";

export function Header( {children} ){
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  return(
    <Container>
      <Wrapper>
        <Link to="/">
          <h2>RocketMovies</h2>
        </Link>
        
        {children}

        <Profile>
          <div className="user">
            <strong>{user.name}</strong>

            <Logout type="button" onClick={handleSignOut}>
              Sair
            </Logout>
          </div>

          <Link to="/profile">
            <img src={avatarURL} alt={user.name} />
          </Link>
        </Profile>
      </Wrapper>
    </Container>
  );
}