import React from 'react';

const ProgressBar = ({total, complete}) => {
    const percent = complete === 0 ? 0 : Math.floor(complete / total * 100);
    return (
        <div>
            <progress max={total} value={complete} />
            <div className="center">
                {percent} %
            </div>
        </div>
    );
};

export default ProgressBar;
