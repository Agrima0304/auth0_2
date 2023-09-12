import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <li>{isAuthenticated&&<p>{user.name}</p>}</li>
      <li>
        {
        isAuthenticated?<li>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      </li>:
      <li>
    <button onClick={()=>loginWithRedirect()}>Log In</button>
    </li>
        }  
        </li>
  
  </div>
  )
}

export default App;
