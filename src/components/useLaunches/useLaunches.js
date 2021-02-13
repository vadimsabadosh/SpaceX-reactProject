import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

export const useLaunches = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData.getLaunches()
        .then(launches => setData(state => [...launches]))
    }, []);

    const getLauch = id => data.find(item => item.id === id);

    return { data, getLauch }
}
