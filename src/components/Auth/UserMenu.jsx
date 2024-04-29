import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors';
import { logOut } from '../../redux/userOperations';
import { BiExit } from 'react-icons/bi';
import { Button, UserMenuCover } from './Auth.styled';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <UserMenuCover>
      <p>Welcome, {name}</p>
      <Button onClick={() => dispatch(logOut())}>
        Log Out
        <BiExit style={{ marginLeft: 5 }} />
      </Button>
    </UserMenuCover>
  );
};
export default UserMenu;
