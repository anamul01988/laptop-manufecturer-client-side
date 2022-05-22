import React from 'react';
import { useParams } from 'react-router-dom';
import usePartsDetail from '../../Hooks/usePartsDetail';

const PartsDetail = () => {
    const {partsId} = useParams();
    const [parts] = usePartsDetail(partsId);
    console.log(parts);
    return (
        <div>
            <h3>{partsId}</h3>
            <h3>{parts.name}</h3>
        </div>
    );
};

export default PartsDetail;