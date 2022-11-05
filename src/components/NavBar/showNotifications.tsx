import { useEffect, useContext } from 'react';
import { EmbedSDK } from "@pushprotocol/uiembed";
import { Web3Context } from './web3Context';

const ShowNotifications = () => {
    const { account, chainId } = useContext<any>(Web3Context);

    useEffect(() => {
        if (account) { // 'your connected wallet address'
          EmbedSDK.init({
            chainId,
            headerText: 'Hello Hacker Dashboard', // optional
            targetID: 'sdk-trigger-id', // mandatory
            appName: 'hackerApp', // mandatory
            user: account, // mandatory
            viewOptions: {
                type: 'sidebar', // optional [default: 'sidebar', 'modal']
                showUnreadIndicator: true, // optional
                unreadIndicatorColor: '#cc1919',
                unreadIndicatorPosition: 'top-right',
            },
            theme: 'light',
            onOpen: () => {
              console.log('-> client dApp onOpen callback');
            },
            onClose: () => {
              console.log('-> client dApp onClose callback');
            }
          });
        }
    
        return () => {
          EmbedSDK.cleanup();
        };
      }, [account, chainId]);


    return (
        <>
          <button id="sdk-trigger-id">Show Notifications</button>
        </>
    );
}

export default ShowNotifications;