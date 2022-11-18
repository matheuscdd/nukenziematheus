import './styles.css';

function BtnMainColor({content, action, fun}) {
    return (
        <div>
            <button className='btn-main-color' onClick={() => action()}>
                {content}
            </button>
        </div>
    );
};

export default BtnMainColor;