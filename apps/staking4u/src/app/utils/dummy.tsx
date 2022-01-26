import aaveLogo from '../assets/logos/aave.png';
import adaLogo from '../assets/logos/ada.png';
import dotLogo from '../assets/logos/dot.png';
import rayLogo from '../assets/logos/ray.png';
import solLogo from '../assets/logos/sol.png';
import orbsLogo from '../assets/logos/orbs.png';
import banner1 from '../assets/banner/banner_01.png';
import banner2 from '../assets/banner/banner_02.png';
import {localeString} from './functions';

export const products = [
  {
    id: 1,
    name: 'Aave',
    symbol: 'AAVE',
    annualInteresetRate: 6.76,
    logo: aaveLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://aave.com/',
  },
  {
    id: 2,
    name: 'Orbs',
    symbol: 'ORBS',
    annualInteresetRate: 5.95,
    logo: orbsLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://www.orbs.com/',
  },
  {
    id: 3,
    name: 'Solana',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    logo: solLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
  },
  {
    id: 4,
    name: 'Raydium',
    symbol: 'RAY',
    annualInteresetRate: 26.65,
    logo: rayLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://raydium.io/',
  },
];

export const banners = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
];

export const coins = [
  {
    icon: orbsLogo,
    name: 'ORBS',
    detail: 'Ethereum',
    amount: 10000,
    price: localeString(1030),
  },
  {
    icon: rayLogo,
    name: 'RAY',
    detail: 'Raydium',
    amount: 100.2,
    price: localeString(960.9),
  },
  {
    icon: aaveLogo,
    name: 'AAVE',
    detail: 'Aave',
    amount: 10,
    price: localeString(2740),
  },
];

export const pieChartData = [
  {
    name: 'ORBS',
    amount: 1030,
    color: '#9c88ff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'RAY',
    amount: 960,
    color: '#e1b12c',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'AAVE',
    amount: 2740,
    color: '#44bd32',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
];

export const investmentHistory = [
  {
    id: 1,
    type: 'Redeem',
    symbol: 'RAY',
    product: 'RAY Flexible Staking',
    date: '2021-10-19 19:45',
    amount: 100,
    fee: 0.0005,
    from: '25QRGrnqwGaNubc1ezCEfiAXnhuMY1a5MYeGb89xHcWM',
    to: 'Dx9fCpDqq7hz59fjEBFju2xLyPWDsFqyqEru93K9LRYp',
    txHash:
      '8fwES5bU6AtHcwohVRFYD8cEzgnDLMGhtMeYMkZ2xsbA2QnQJLNtuzG6iAv4NcpGuLWtav46J2FzmWhKHoVspmi',
  },
  {
    id: 2,
    type: 'Rewards',
    symbol: 'RAY',
    product: 'RAY Flexible Staking',
    date: '2021-10-09 10:10',
    amount: 100,
    fee: 0.0005,
    from: '25QRGrnqwGaNubc1ezCEfiAXnhuMY1a5MYeGb89xHcWM',
    to: 'Dx9fCpDqq7hz59fjEBFju2xLyPWDsFqyqEru93K9LRYp',
    txHash:
      '37To1XGELoJ1s6jmMm3P2SXh3y2itwTrnuNdyvPfCUVhhSDZiPUf8nnUbUQwahAX2pTtaEVb99RJ37GUZHcKENqi',
  },
  {
    id: 3,
    type: 'Stake',
    symbol: 'RAY',
    product: 'RAY Flexible Staking',
    date: '2021-10-14 13:15',
    amount: 100,
    fee: 0.0005,
    from: '9VnmLdhKU1224jaL9BcrX6DyGmVNd96teHYqAuJT7Yov',
    to: '25QRGrnqwGaNubc1ezCEfiAXnhuMY1a5MYeGb89xHcWM',
    txHash:
      'HNoR8MU2DZ4hUAescVphURqsQ6cbD4XdQuPhEJaS1tp5SLk1EvGeghYj6w8JDCW3nP9oEGuc45TZCmQhm7ELqDA',
  },
];
