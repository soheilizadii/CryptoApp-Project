const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY= "CG-WtQhzVywYAbbjTsKuhnuTovt";
const getCoins = (page , currency)=>{
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
}
const searchCoins = (search)=>{
    return `${BASE_URL}/search?query=${search}&x_cg_demo_api_key=${API_KEY}`;
}

const chartCoins = (type)=>{
    return `${BASE_URL}/coins/${type}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`;
}

export  {getCoins,searchCoins,chartCoins};
