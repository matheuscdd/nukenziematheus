import './styles.css';
import Card from '../Card';

function AncientEntries() {
    return (
        <ul className='ancient-entries'>
            <p>Você não colocou nenhum lançamento</p>
            <Card title='Sou um teste' type='income' value={200} identifier={30}/>
            <Card title='Sou um teste' type='expense' value={200} identifier={31}/>
            <Card title='Sou um teste' type='expense' value={200} identifier={33}/>
            <Card preloader identifier={33}/>
        </ul>
    );
};

export default AncientEntries;