import PrimaryButton from "@shared/components/Buttons/primary-button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./connectWallet.module.scss";
import { useEffect, useState } from "react";
import { walletInjecter } from "../../components/wallet";
import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3';
import { GoThreeBars } from "react-icons/go";
import { showToast, Types } from '@shared/utils/toast-utils/toast.util';


const ConnectWallet = ({ show, setShow }: any) => {

    const [showWallet, setShowWallet] = useState<boolean>(true);
    const [balance, setBalance] = useState<string>('')
    const { active, account, chainId, activate, deactivate, library } = useWeb3React();


    useEffect(() => {
        const fetchBalance = async () => {
            if (!active || !account || !library) {
                return;
            }

            try {
                const balanceInWei = await library.eth.getBalance(account);
                const balanceInBNB = Web3.utils.fromWei(balanceInWei, 'ether');
                setBalance(balanceInBNB);
            } catch (err) {
                showToast(Types.error, 'Something went wrong' + err);
            }
        };

        const connectWalletOnPageLoad = async () => {
            const isWalletConnected = localStorage.getItem('isWalletConnected') === 'true';
            if (isWalletConnected) {
                try {
                    await activate(walletInjecter);
                    localStorage.setItem('isWalletConnected', 'true');
                } catch (err) {
                    showToast(Types.error, 'Something went wrong' + err);
                }
            }
        };

        connectWalletOnPageLoad();
        fetchBalance();
    }, [active, account, library]);


    const connectWallet = async () => {
        try {
            await activate(walletInjecter);
            localStorage.setItem('isWalletConnected', 'true');
            showToast(Types.success, 'Wallet connected!');
            setShowWallet(false);
        } catch (err) {
            showToast(Types.error, 'Something went wrong' + err);
        }
    };

    const disconnectWallet = async () => {
        try {
            deactivate()
            localStorage.setItem('isWalletConnected', 'false');
            showToast(Types.error, 'Wallet disconnected!');
            setShowWallet(true);
        } catch (err) {
            showToast(Types.error, 'Something went wrong' + err);
        }
    };

    const handleClose = async () => {
        setShow(false);
    };


    return (
        <>
            <div className={`modal show ${styles.call_modal}`}>
                <Modal show={show} centered>
                    <Modal.Body>
                        <h3>Wallet Details</h3>
                        <hr />
                        <i
                            className={"fa fa-times " + styles.cross_delete}
                            aria-hidden="true"
                            onClick={handleClose}
                        ></i>
                        <div className={styles.form_section}>
                            {showWallet && !active ?
                                <>
                                    <div className={`${styles.wallet_prompt} pb-5`}>Wallet not connected. Please click the "Connect Now" button below.</div>
                                    <Form
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div className={styles.button_wrapper}>
                                            <PrimaryButton
                                                btnLabel="Connect"
                                                className={styles.connect_btn}
                                                btnFunction={connectWallet}
                                                variant="primary"
                                                type='button'
                                            />
                                            <PrimaryButton
                                                btnLabel="Cancel"
                                                type="button"
                                                btnFunction={handleClose}
                                                className={styles.close_btn}
                                            />
                                        </div>
                                    </Form>
                                </>
                                :
                                <>
                                    <div className={`pb-3 ${styles.wallet_detail}`}>
                                        <table className={`table ${styles.table_wallet}`}>
                                            <thead>
                                                <tr>
                                                    <td className={styles.table_td}>KEY</td>
                                                    <td className={`text-end ${styles.table_td}`}>VALUE</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Account</td>
                                                    <td className="text-end">{account ? `${account.substring(0, 5)}...${account.substring(account.length - 4)}` : ''}</td>

                                                </tr>
                                                <tr>
                                                    <td>Chain ID</td>
                                                    <td className="text-end">{chainId || ''}</td>
                                                </tr>
                                                <tr>
                                                    <td>Balance</td>
                                                    <td className="text-end"><div className={styles.balance}><GoThreeBars />{balance || ''}</div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="text-center">Wallet Details</p>
                                    </div>
                                    <div className={styles.button_wrapper_disconnect}>
                                        <PrimaryButton
                                            btnLabel="Disconnect"
                                            className={`${styles.disconnect_btn} w-100`}
                                            btnFunction={disconnectWallet}
                                            variant="danger"
                                            type='button'
                                        />
                                    </div>
                                </>
                            }

                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default ConnectWallet;