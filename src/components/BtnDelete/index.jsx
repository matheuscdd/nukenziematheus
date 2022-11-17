import './styles.css';

function BtnDelete({id, action}) {
    return (
        <button className='btn-delete' onClick={() => action}></button>
    );
};

export default BtnDelete;