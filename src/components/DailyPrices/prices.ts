import price1 from '../../assets/price1.png';
import price2 from '../../assets/price2.png';
import price3 from '../../assets/price3.png';
import price4 from '../../assets/price4.png';
import bitcoin from '../../assets/bitcoin.png';
import ethereum from '../../assets/ethereum.png';
import ggcoin from '../../assets/ggcoin.png';

export const dailyPricesData = [
  {
    name: 'Bitcoin',
    image: bitcoin,
    short: 'BTC',
    price: '$33,592.99',
    change: '+4.3%',
    marketCap: '$635.14B',
    chart: price1,
  },
  {
    name: 'Ethereum',
    image: ethereum,
    short: 'ETH',
    price: '$2,273.19',
    change: '+2.1%',
    marketCap: '$267.12B',
    chart: price2,
  },
  {
    name: 'GGCoin',
    image: ggcoin,
    short: 'GGC',
    price: '$349.47',
    change: '-7.9%',
    marketCap: '$57.16B',
    chart: price3,
  },
  {
    name: 'Bitcoin',
    image: bitcoin,
    short: 'BTC',
    price: '$0.9434',
    change: '0.0%',
    marketCap: '$27.12B',
    chart: price4,
  },
];
