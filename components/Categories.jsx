import React from 'react'
import {useEffect , useState} from 'react'
import moment from 'moment';
import Link from 'next/link'
import Categories from './Categories';
import { getCategories } from '../services';

const Categories = () => {
    const [Categories, setCategories] = useState([]);
  
    useEffect(() => {
     
        setCategories().then((newCategories) => {
            setCategories(newCategories);
        });
      
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Categories
