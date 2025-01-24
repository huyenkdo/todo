import { useParams } from 'react-router';

function User() {
  const username = useParams().username

  return (
    <div>
    <h1>I am {username}</h1>
    </div>
   )
}

export default User;
