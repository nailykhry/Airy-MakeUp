const matte = [
    {
        title : 'Poppin\' Matte The 90\'s Edition',
        d_price : 'Rp 50.999',
        bd_price : 'Rp 90.000'
    },
    {
        title : 'Poppin\' Matte',
        d_price : 'Rp 73.399',
        bd_price : 'Rp 99.999'
    },
    {
        title : 'Vamptastic Plum',
        d_price : 'Rp 50.000',
        bd_price : 'Rp 60.000'
    },
    {
        title : 'Rosewood Series',
        d_price : 'Rp 99.999',
        bd_price : 'Rp 129.999'
    },
    {
        title : 'Nude Series',
        d_price : 'Rp 50.999',
        bd_price : 'Rp 90.000'
    },
    {
        title : 'Periwinkle',
        d_price : 'Rp 73.399',
        bd_price : 'Rp 99.999'
    },
    {
        title : 'Shocking Purple',
        d_price : 'Rp 50.000',
        bd_price : 'Rp 60.000'
    },
    {
        title : 'Pure Red',
        d_price : 'Rp 99.999',
        bd_price : 'Rp 129.999'
    },
    {
        title : 'New Peach',
        d_price : 'Rp 59.999',
        bd_price : 'Rp 90.000'
    },
]

const title = document.querySelector('.title');
const d_price = document.querySelector('.d_price');


function showDetail(id){
    console.log(id);
    const matteProduct = matte[id];
    title.innerText = matteProduct.title;
    d_price.innerText = matteProduct.d_price;
}






