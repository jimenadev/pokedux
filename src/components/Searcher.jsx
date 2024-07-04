import { Input } from 'antd'
import { useDispatch } from 'react-redux';
import { setSearch } from '../slices/dataSlice'


const Searcher = ({ setIsSearch }) =>{

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
      if (e.target.value === ''){
        setIsSearch(false)
      }
      
      dispatch(setSearch(e.target.value))
      setIsSearch(true)
    }

    return <Input.Search placeholder='Buscar....' onChange={handleOnChange} style={{marginBottom:10}} />
}

export default Searcher