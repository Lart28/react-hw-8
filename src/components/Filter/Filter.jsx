import { Label } from './Filter.styled';
import { changeValue } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { MdPersonSearch } from 'react-icons/md';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  return (
    <Label htmlFor=''>
      <MdPersonSearch />
      <input
        type='text'
        name='filter'
        value={filterValue}
        onChange={e => dispatch(changeValue(e.currentTarget.value))}
        placeholder='Search contacts...'
      />
    </Label>
  );
};
export default Filter;
