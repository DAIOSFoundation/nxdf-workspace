import { FC, useCallback } from "react";

import styled from 'styled-components';

import { SendSPLTransaction, useConnection, useWallet, WalletMultiButton } from "@nxdf/shared/services";

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

    const chunkSize = 10;
    const toAddressesGroup = toAddresses.map((e, i) => {
      return i % chunkSize === 0 ? toAddresses.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });
    const amountsGroup = amounts.map((e, i) => {
      return i % chunkSize === 0 ? amounts.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });

    toAddressesGroup.map(async (group, index) => {
      await SendSPLTransaction(connection, publicKey, signTransaction, mintAddress, toAddressesGroup[index], amountsGroup[index], decimals);
    });

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
