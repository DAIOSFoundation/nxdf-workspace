import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import Main from "../../../components/Lotto/Main";
import Header from "../../../components/Lotto/Header";
import LotteryBuyers from "../../../components/Lotto/LotteryBuyers";
import About from "../../../components/Lotto/About";
import Winners from "../../../components/Lotto/Winners";
import Footer from "../../../components/Lotto/Footer";
import Head from "next/head";

/* eslint-disable-next-line */
export interface LottoProps {};

export const CONTAINER_WIDTH = '1100px';

export function Lotto(props: LottoProps) {
  const router = useRouter();

  const [userId, setUserId] = useState('');

  useEffect(() => {
    if(!router.isReady || !router.query.user_id) return;
    setUserId(router.query.user_id.toString());
  }, [router.isReady, router.query]);

  return (
    <div>
      <Head>
        <title>Welcome to NXDF Lotto!</title>
      </Head>
      <Header/>
      <Main userId={userId}/>
      <LotteryBuyers/>
      <About/>
      <Winners/>
      <Footer/>
    </div>
  )
}

export default Lotto;
