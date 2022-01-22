import { FC, useCallback } from "react";

import styled from 'styled-components';
import { SendSPLTransaction } from '../utils/sendTransaction';

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const StyledPage = styled.div`
  .page {
  }
`;


export const Index: FC = ({}) => {
// export function Index() {

  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  let addressAmountList = '';
  const onAddressListChange = (event: any) => {
    addressAmountList = event.target.value;
  }

  const sendToken = useCallback(async () => {
    if (!publicKey) {
      alert('error: Wallet not connected!');
      return;
    }

    const mintAddress = 'Au6EdrSDubCUc34awy9c6iQAg5GSos9pPBXyZQtyZewV'; //nxdf

    const addressAmounts = addressAmountList.trim().split('\n');
    const toAddresses:string[] = [];
    const amounts:number[] = [];

    addressAmounts.map(addressAmount => {
      addressAmount = addressAmount.trim().replace('\t', '');
      if(addressAmount === '') return;

      const splitAddressAmount = addressAmount.split(',');
      toAddresses.push(splitAddressAmount[0].trim());
      amounts.push(Number(splitAddressAmount[1].trim()));
    });

    const decimals = 10**6;
    await SendSPLTransaction(connection, publicKey, signTransaction, mintAddress, toAddresses, amounts, decimals);

  }, [publicKey, connection, signTransaction]);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">

          <WalletMultiButton className="btn btn-ghost" />

          <div>
            <b>Bulk Transfer</b>

            <div>
              <div>
                <textarea
                  rows={10}
                  placeholder="5xFtv2Up9orzDWrHmPBxcHjc6ah4iz6hme6qSmmKwmnc, 100"
                  onChange={onAddressListChange}
                />
              </div>

              <div>
                <button type="button" onClick={sendToken}>
                  Send
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
