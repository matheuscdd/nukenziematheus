function valueReal(num) {
    return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};

export default valueReal;