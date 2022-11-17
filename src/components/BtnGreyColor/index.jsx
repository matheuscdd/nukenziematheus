import './styles.css';

function BtnGreyColor({content, action}) {
    return (
        <div>
            <button className='btn-grey-color' onClick={() => action(content)}>
                {content}
            </button>
        </div>
    );
};

export default BtnGreyColor;