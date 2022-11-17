import './styles.css';

function BtnMainColor({content, action}) {
    return (
        <div>
            <button className='btn-main-color' onClick={(event) => {
                event.preventDefault();
                }}>
                {content}
            </button>
        </div>
    );
};

export default BtnMainColor;