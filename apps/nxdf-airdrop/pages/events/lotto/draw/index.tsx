import { useRouter } from 'next/router';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import {useWallet} from "@solana/wallet-adapter-react";
import {useConnection, WalletMultiButton} from "@nxdf/shared/services";
import {useIsMobile} from "../../../../hooks/useIsMobile";

/* eslint-disable-next-line */
export interface LottoDrawProps {};

export const CONTAINER_WIDTH = '1100px';

export function LottoDraw(props: LottoDrawProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { publicKey } = useWallet();

  const [userId, setUserId] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if(!router.isReady) return;
    setUserId(router.query.user_id as string);
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (publicKey) {
      setAddress(publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div>
      draw
    </div>
  )
}

export default LottoDraw;
