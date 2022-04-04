import styled from 'styled-components';
import styles from './Lottery.module.css';
import {
  useConnection,
  useWallet,
  SendSPLTransaction,
} from '@nxdf/shared/services';
import { useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useRouter } from 'next/router';
import { child, get, set, push, ref, update } from '@firebase/database';
import firebase from 'firebase/compat';
import database = firebase.database;
import { increment } from 'firebase/database';
import router from 'next/router';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { dbService } from '../../Lotto/firebase';
import LotteryBox from '../../Lotto/Draw/LotteryBox';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #453c70;
`;
export interface LottoProps {
  userId: string;
}

const AdminLotteryApp = (props: LottoProps) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [walletPublicKey, setWalletPublicKey] = useState<PublicKey>(null);
  const [buyers, setBuyers] = useState<any[]>([]);
  const [admin, setAdmin] = useState<any[]>([]);
  const [previousPrizeData, setPreviousPrizeData] = useState<any[]>([]);
  const [Jackpot, setJackpot] = useState<any[]>([]);
  const IsAdminAddress = admin?.map(data => data[1].walletAdress === walletPublicKey?.toString()).includes(true) ? true : false;
  const IsAdminNumber = admin?.map(data => data[1].userId === props.userId).includes(true) ? true : false;
  useEffect(() => {
    if (!router.query.user_id || IsAdminNumber) { 
     router.back();
    }

    const dbRef = ref(dbService);
    get(child(dbRef, 'drawnumber/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setBuyers(Object.entries(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    
    get(child(dbRef, 'adminTest/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAdmin(Object.entries(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    get(child(dbRef, 'pickNumber/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPreviousPrizeData(Object.entries(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    
    get(child(dbRef, 'currentJackpot/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setJackpot(Object.entries(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (!publicKey) return;
    setWalletPublicKey(publicKey);
    
  }, [router]);
  // const current = new Date();
  // const today = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;

  const today = new Date().toUTCString();
  const lastpickIndex = previousPrizeData.filter(data => data[1].winner).flat().pop()?.findPreIndex || 0;
  const pickTicket = async (lottoNumber) => {
    if (IsAdminAddress) {
      const number = lottoNumber.toString().split(',').join('');
      const preBuyer = buyers.slice(lastpickIndex)
      const winner =
        preBuyer.filter((e) => e[1].numbers == number)
        .flat()
        .map(date => date.walletAddress ? date.walletAddress : null);
      const findPreIndex = buyers.length - 1;
      const isExistWinner = !winner.length ? 1 : winner.length / 2;
      const prize = Jackpot[0]?.[1] / isExistWinner
      const Ref = ref(dbService, 'pickNumber');

      await push(Ref, {
        number,
        winner,
        today,
        prize,
        findPreIndex,
      });
    } else {
      return alert("You are not Authorized to do this action");
    }
  };
  return (
    <Div>
      <h1 id={styles.title}>Lotto Draw</h1>
      <LotteryBox buyTicket={pickTicket} />
    </Div>
  );
};

export default AdminLotteryApp;
