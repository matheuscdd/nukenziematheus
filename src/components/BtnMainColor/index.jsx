import './styles.css';

function BtnMainColor({content, action}) {
    return (
        <div>
            <button className='btn-main-color'>
                {content}
            </button>
        </div>
    );
};

export default BtnMainColor;