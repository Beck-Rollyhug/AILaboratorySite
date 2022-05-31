import React from 'react';

const Partners = ({partners}) => {
    return (
        <div>
            {partners.map(partner =>
                <h3>{partner}</h3>
            )}
        </div>
    );
};

export default Partners;