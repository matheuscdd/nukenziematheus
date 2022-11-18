import './styles.css';
import Card from '../Card';

function AncientEntries({entriesList, action}) {
    return (
        <ul className='ancient-entries'>
            {
                entriesList.length === 0?
                noCards()
                : renderCards(entriesList, action)
            }
        </ul>
    );
};

function renderCards(array, fun) {
    return (
        <>
        {
            array.map(({title, price, choice, uuid}, index) => <Card title={title} value={Number(price)} type={choice} key={index} action={fun} identifier={uuid}/>)
        }
        </>
    );
};
            
function noCards() {
    const cardsNumbers = [0,1,2];
    return (
        <>
            <p>Você não colocou nenhum lançamento</p>
            {cardsNumbers.map((el, index) => 
                <Card preloader key={index}/>
            )}
        </>
    );
};

  
export default AncientEntries;