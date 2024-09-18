import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NextButton = ({ id, routeNextStep }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const route = id ? `${routeNextStep}/${id}` : routeNextStep;
        navigate(route);
    };

    return (
        <div>
            <Button label="Bước tiếp theo" onClick={handleClick} />
        </div>
    );
};
