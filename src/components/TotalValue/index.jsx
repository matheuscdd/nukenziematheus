import './styles.css';

function TotalValue({priceAll}) {
    return (
        <div className='total-value'>
            <div className='cont-priceAll'>
                <h4>Valor total:</h4>
                <h4 className='priceTotal'>{priceAll.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
            </div>
            <small>O valor se refere ao saldo</small>
        </div>
    );
};

export default TotalValue;