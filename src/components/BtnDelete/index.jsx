import './styles.css';

function BtnDelete({id, action, classe}) {
    return (
        <button className={'btn-delete ' + classe} onClick={() => action}></button>
    );
};

export default BtnDelete;