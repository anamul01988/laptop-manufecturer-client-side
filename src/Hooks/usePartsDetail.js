import React, { useEffect, useState } from 'react';

const usePartsDetail = partsId=> {
    const [parts, setParts] = useState({});
    useEffect(()=>{
        const url = `https://guarded-chamber-19497.herokuapp.com/parts/${partsId}`;
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data =>setParts(data))
    },[partsId]);
    return [parts];

};

export default usePartsDetail;