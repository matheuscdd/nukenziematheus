import './styles.css';

function BtnDelete({uuid, action, classe}) {
    return (
        <button className={'btn-delete ' + classe} onClick={() => action(uuid)}></button>
    );
};

export default BtnDelete;