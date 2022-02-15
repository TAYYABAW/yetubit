import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
  Modal,
  Button,
  Container,
  Tab,
  Nav,
} from "react-bootstrap";
//Import
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import Coinpayments from "coinpayments";

import { ReactComponent as Arr } from "./Wallet/arrow.svg";
import { ReactComponent as Door } from "./Wallet/door.svg";

import HomeBTC  from "./Wallet/1BTC/HomeBTC";
import  DepositBTC from "./Wallet/1BTC/DepositBTC";
import WithdrawBTC from "./Wallet/1BTC/WithdrawBTC";


import HomeBCH from "./Wallet/2BCH/HomeBCH";
import DepositBCH  from "./Wallet/2BCH/DepositBCH";
import WithdrawBCH from "./Wallet/2BCH/WithdrawBCH";


import HomeLTC from "./Wallet/3LTC/HomeLTC";
import DepositLTC from "./Wallet/3LTC/DepositLTC";
import WithdrawLTC from "./Wallet/3LTC/WithdrawLTC";


import HomeVLX from "./Wallet/4VLX/HomeVLX";
import DepositVLX from "./Wallet/4VLX/DepositVLX";
import WithdrawVLX from "./Wallet/4VLX/WithdrawVLX";


import HomeADA from "./Wallet/5ADA/HomeADA";
import DepositADA  from "./Wallet/5ADA/DepositADA";
import WithdrawADA from "./Wallet/5ADA/WithdrawADA";


import HomeBNB from "./Wallet/6BNB/HomeBNB";
import DepositBNB from "./Wallet/6BNB/DepositBNB";
import WithdrawBNB from "./Wallet/6BNB/WithdrawBNB";


import HomeDAI  from "./Wallet/7DAI/HomeDAI";
import DepositDAI from "./Wallet/7DAI/DepositDAI";
import WithdrawDAI from "./Wallet/7DAI/WithdrawDAI";


import HomeDASH from "./Wallet/8DASH/HomeDash";
import DepositDASH from "./Wallet/8DASH/DepositDASH";
import WithdrawDASH from "./Wallet/8DASH/WithdrawDASH";


import HomeDGB from "./Wallet/9DGB/HomeDGB";
import DepositDGB from "./Wallet/9DGB/DepositDGB";
import WithdrawDGB from "./Wallet/9DGB/WithdrawDGB";


import HomeDIVI from "./Wallet/10DIVI/HomeDIVI";
import DepositDIVI from "./Wallet/10DIVI/DepositDIVI";
import WithdrawDIVI from "./Wallet/10DIVI/WithdrawDIVI";


import HomeDOGE from "./Wallet/11DOGE/HomeDOGE";
import DepositDOGE from "./Wallet/11DOGE/DepositDOGE";
import WithdrawDOGE from "./Wallet/11DOGE/WithdrawDOGE";


import HomeETH from "./Wallet/12ETH/HomeETH";
import DepositETH from "./Wallet/12ETH/DepositETH";
import WithdrawETH  from "./Wallet/12ETH/WithdrawETH";


import HomeETHEREUM from "./Wallet/13ETHEREUM/HomeETHEREUM";
import DepositETHEREUM from "./Wallet/13ETHEREUM/DepositETHEREUM";
import WithdrawETHEREUM from "./Wallet/13ETHEREUM/WithdrawETHEREUM";


import HomeSHIB from "./Wallet/14SHIB/HomeSHIB";
import DepositSHIB from "./Wallet/14SHIB/DepositSHIB";
import WithdrawSHIB from "./Wallet/14SHIB/WithdrawSHIB";


import HomeSMART from "./Wallet/15SMART/HomeSMART";
import DepositSMART from "./Wallet/15SMART/DepositSMART";
import WithdrawSMART from "./Wallet/15SMART/WithdrawSMART";


import HomeSOL from "./Wallet/16SOL/HomeSOL";
import DepositSOL from "./Wallet/16SOL/DepositSOL";
import WithdrawSOL from "./Wallet/16SOL/WithdrawSOL";


import HomeTRX  from "./Wallet/17TRX/HomeTRX";
import DepositTRX from "./Wallet/17TRX/DepositTRX";
import WithdrawTRX from "./Wallet/17TRX/WithdrawTRX";


import HomeUSDC from "./Wallet/18USDC/HomeUSDC";
import DepositUSDC from "./Wallet/18USDC/DepositUSDC";
import WithdrawUSDC from "./Wallet/18USDC/WithdrawUSDC";


import HomeUSDT from "./Wallet/19USDT/HomeUSDT";
import DepositUSDT from "./Wallet/19USDT/DepositUSDT";
import WithdrawUSDT from "./Wallet/19USDT/WithdrawUSDT";


import HomeXMR from "./Wallet/20XMR/HomeXMR";
import DepositXMR  from "./Wallet/20XMR/DepositXMR";
import WithdrawXMR from "./Wallet/20XMR/WithdrawXMR";


import HomeXRP  from "./Wallet/21XRP/HomeXRP";
import DepositXRP  from "./Wallet/21XRP/DepositXRP";
import  WithdrawXRP from "./Wallet/21XRP/WithdrawXRP";


import HomeZEC from "./Wallet/22ZEC/HomeZEC";
import DepositZEC from "./Wallet/22ZEC/DepositZEC";
import WithdrawZEC from "./Wallet/22ZEC/WithdrawZEC";


const client = new Coinpayments({
  key: "eb9c4c42626c58f13ca6e70b4812c46f36e269f7c1ef5f0b184c2c936dff8a15",
  secret: "BfF48F19A4513ec6fF76cd4854CC4947ab29485c32ef2339C7A0400cEf86E355",
});

const MyWallet = () => {
  const [BTC_modal, setBTC_modal] = useState("");
  const [BCH_modal, setBCH_modal] = useState("");
  const [LTC_modal, setLTC_modal] = useState("");
  const [VLX_modal, setVLX_modal] = useState("");
  const [ADA_modal, setADA_modal] = useState("");
  const [BNB_modal, setBNB_modal] = useState("");
  const [DAI_modal, setDAI_modal] = useState("");
  const [DASH_modal, setDASH_modal] = useState("");
  const [DGB_modal, setDGB_modal] = useState("");
  const [DIVI_modal, setDIVI_modal] = useState("");
  const [DOGE_modal, setDOGE_modal] = useState("");
  const [ETH_modal, setETH_modal] = useState("");
  const [Ethereum_modal, setEthereum_modal] = useState("");
  const [SHIB_modal, setSHIB_modal] = useState("");
  const [SMART_modal, setSMART_modal] = useState("");
  const [SOL_modal, setSOL_modal] = useState("");
  const [TRX_modal, setTRX_modal] = useState("");
  const [USDC_modal, setUSDC_modal] = useState("");
  const [USDT_modal, setUSDT_modal] = useState("");
  const [XMR_modal, setXMR_modal] = useState("");
  const [XRP_modal, setXRP_modal] = useState("");
  const [ZEC_modal, setZEC_modal] = useState("");

  const tabData1 = [
    {
      name: "Home",
      content: <HomeBTC />,
    },
    {
      name: "Withdraw",
      content: <WithdrawBTC />,
    },
    {
      name: "Deposit",
      content: <DepositBTC />,
    },
    {
      name: "extra",
    },
  ];

  const tabData2 = [
    {
      name: "Home",
      content: <HomeBCH />,
    },
    {
      name: "Withdraw",
      content: <WithdrawBCH />,
    },
    {
      name: "Deposit",
      content: <DepositBCH />,
    },
    {
      name: "extra",
    },
  ];
  const tabData3 = [
    {
      name: "Home",
      content: <HomeLTC />,
    },
    {
      name: "Withdraw",
      content: <WithdrawLTC />,
    },
    {
      name: "Deposit",
      content: <DepositLTC />,
    },
    {
      name: "extra",
    },
  ];
  const tabData4 = [
    {
      name: "Home",
      content: <HomeVLX />,
    },
    {
      name: "Withdraw",
      content: <WithdrawVLX />,
    },
    {
      name: "Deposit",
      content: <DepositVLX />,
    },
    {
      name: "extra",
    },
  ];
  const tabData5 = [
    {
      name: "Home",
      content: <HomeADA />,
    },
    {
      name: "Withdraw",
      content: <WithdrawADA />,
    },
    {
      name: "Deposit",
      content: <DepositADA />,
    },
    {
      name: "extra",
    },
  ];
  const tabData6 = [
    {
      name: "Home",
      content: <HomeBNB />,
    },
    {
      name: "Withdraw",
      content: <WithdrawBNB />,
    },
    {
      name: "Deposit",
      content: <DepositBNB />,
    },
    {
      name: "extra",
    },
  ];
  const tabData7 = [
    {
      name: "Home",
      content: <HomeDAI />,
    },
    {
      name: "Withdraw",
      content: <WithdrawDAI />,
    },
    {
      name: "Deposit",
      content: <DepositDAI />,
    },
    {
      name: "extra",
    },
  ];
  const tabData8 = [
    {
      name: "Home",
      content: <HomeDASH />,
    },
    {
      name: "Withdraw",
      content: <WithdrawDASH />,
    },
    {
      name: "Deposit",
      content: <DepositDASH />,
    },
    {
      name: "extra",
    },
  ];
  const tabData9 = [
    {
      name: "Home",
      content: <HomeDGB />,
    },
    {
      name: "Withdraw",
      content: <WithdrawDGB />,
    },
    {
      name: "Deposit",
      content: <DepositDGB />,
    },
    {
      name: "extra",
    },
  ];
  const tabData10 = [
    {
      name: "Home",
      content: <HomeDIVI />,
    },
    {
      name: "Withdraw",
      content: <WithdrawDIVI />,
    },
    {
      name: "Deposit",
      content: <DepositDIVI />,
    },
    {
      name: "extra",
    },
  ];
  const tabData11 = [
    {
      name: "Home",
      content: <HomeDOGE />,
    },
    {
      name: "Withdraw",
      content: <WithdrawDOGE />,
    },
    {
      name: "Deposit",
      content: <DepositDOGE />,
    },
    {
      name: "extra",
    },
  ];
  const tabData12 = [
    {
      name: "Home",
      content: <HomeETH />,
    },
    {
      name: "Withdraw",
      content: <WithdrawETH />,
    },
    {
      name: "Deposit",
      content: <DepositETH />,
    },
    {
      name: "extra",
    },
  ];
  const tabData13 = [
    {
      name: "Home",
      content: <HomeETHEREUM />,
    },
    {
      name: "Withdraw",
      content: <WithdrawETHEREUM />,
    },
    {
      name: "Deposit",
      content: <DepositETHEREUM />,
    },
    {
      name: "extra",
    },
  ];
  const tabData14 = [
    {
      name: "Home",
      content: <HomeSHIB />,
    },
    {
      name: "Withdraw",
      content: <WithdrawSHIB />,
    },
    {
      name: "Deposit",
      content: <DepositSHIB />,
    },
    {
      name: "extra",
    },
  ];
  const tabData15 = [
    {
      name: "Home",
      content: <HomeSMART />,
    },
    {
      name: "Withdraw",
      content: <WithdrawSMART />,
    },
    {
      name: "Deposit",
      content: <DepositSMART />,
    },
    {
      name: "extra",
    },
  ];
  const tabData16 = [
    {
      name: "Home",
      content: <HomeSOL />,
    },
    {
      name: "Withdraw",
      content: <WithdrawSOL />,
    },
    {
      name: "Deposit",
      content: <DepositSOL />,
    },
    {
      name: "extra",
    },
  ];
  const tabData17 = [
    {
      name: "Home",
      content: <HomeTRX />,
    },
    {
      name: "Withdraw",
      content: <WithdrawTRX />,
    },
    {
      name: "Deposit",
      content: <DepositTRX />,
    },
    {
      name: "extra",
    },
  ];
  const tabData18 = [
    {
      name: "Home",
      content: <HomeUSDC />,
    },
    {
      name: "Withdraw",
      content: <WithdrawUSDC />,
    },
    {
      name: "Deposit",
      content: <DepositUSDC />,
    },
    {
      name: "extra",
    },
  ];
  const tabData19 = [
    {
      name: "Home",
      content: <HomeUSDT />,
    },
    {
      name: "Withdraw",
      content: <WithdrawUSDT />,
    },
    {
      name: "Deposit",
      content: <DepositUSDT />,
    },
    {
      name: "extra",
    },
  ];
  const tabData20 = [
    {
      name: "Home",
      content: <HomeXMR />,
    },
    {
      name: "Withdraw",
      content: <WithdrawXMR />,
    },
    {
      name: "Deposit",
      content: <DepositXMR />,
    },
    {
      name: "extra",
    },
  ];
  const tabData21 = [
    {
      name: "Home",
      content: <HomeXRP />,
    },
    {
      name: "Withdraw",
      content: <WithdrawXRP />,
    },
    {
      name: "Deposit",
      content: <DepositXRP />,
    },
    {
      name: "extra",
    },
  ];
  const tabData22 = [
    {
      name: "Home",
      content: <HomeZEC />,
    },
    {
      name: "Withdraw",
      content: <WithdrawZEC />,
    },
    {
      name: "Deposit",
      content: <DepositZEC />,
    },
    {
      name: "extra",
    },
  ];

  // BALANCE
  const [BTC_balance, setBTC_balance] = useState("");
  const [BCH_balance, setBCH_balance] = useState("");
  const [LTC_balance, setLTC_balance] = useState("");
  const [VLX_balance, setVLX_balance] = useState("");
  const ADA = "ADA.BEP2";
  const [ADA_balance, setADA_balance] = useState("");
  const [BNB_balance, setBNB_balance] = useState("");
  const [DAI_balance, setDAI_balance] = useState("");
  const [DASH_balance, setDASH_balance] = useState("");
  const [DGB_balance, setDGB_balance] = useState("");
  const [DIVI_balance, setDIVI_balance] = useState("");
  const [DOGE_balance, setDOGE_balance] = useState("");
  const [ETH_balance, setETH_balance] = useState("");
  const Ethereum = "ETH.BEP2";
  const [Ethereum_balance, setEthereum_balance] = useState("");
  const [SHIB_balance, setSHIB_balance] = useState("");
  const [SMART_balance, setSMART_balance] = useState("");
  const [SOL_balance, setSOL_balance] = useState("");
  const [TRX_balance, setTRX_balance] = useState("");
  const [USDC_balance, setUSDC_balance] = useState("");
  const USDT = "USDT.BEP2";
  const [USDT_balance, setUSDT_balance] = useState("");
  const [XMR_balance, setXMR_balance] = useState("");
  const XR = "XRP.BEP2";
  const [XRP_balance, setXRP_balance] = useState("");
  const [ZEC_balance, setZEC_balance] = useState("");

  // RATE
  const [BTC_rate, setBTC_rate] = useState("");
  const [BCH_rate, setBCH_rate] = useState("");
  const [LTC_rate, setLTC_rate] = useState("");
  const [VLX_rate, setVLX_rate] = useState("");
  const [ADA_rate, setADA_rate] = useState("");
  const [BNB_rate, setBNB_rate] = useState("");
  const [DAI_rate, setDAI_rate] = useState("");
  const [DASH_rate, setDASH_rate] = useState("");
  const [DGB_rate, setDGB_rate] = useState("");
  const [DIVI_rate, setDIVI_rate] = useState("");
  const [DOGE_rate, setDOGE_rate] = useState("");
  const [ETH_rate, setETH_rate] = useState("");
  const [Ethereum_rate, setEthereum_rate] = useState("");
  const [SHIB_rate, setSHIB_rate] = useState("");
  const [SMART_rate, setSMART_rate] = useState("");
  const [SOL_rate, setSOL_rate] = useState("");
  const [TRX_rate, setTRX_rate] = useState("");
  const [USDC_rate, setUSDC_rate] = useState("");
  const [USDT_rate, setUSDT_rate] = useState("");
  const [XMR_rate, setXMR_rate] = useState("");
  const [XRP_rate, setXRP_rate] = useState("");
  const [ZEC_rate, setZEC_rate] = useState("");

  // Tax_rate
  const [BTC_tax, setBTC_tax] = useState("");
  const [BCH_tax, setBCH_tax] = useState("");
  const [LTC_tax, setLTC_tax] = useState("");
  const [VLX_tax, setVLX_tax] = useState("");
  const [ADA_tax, setADA_tax] = useState("");
  const [BNB_tax, setBNB_tax] = useState("");
  const [DAI_tax, setDAI_tax] = useState("");
  const [DASH_tax, setDASH_tax] = useState("");
  const [DGB_tax, setDGB_tax] = useState("");
  const [DIVI_tax, setDIVI_tax] = useState("");
  const [DOGE_tax, setDOGE_tax] = useState("");
  const [ETH_tax, setETH_tax] = useState("");
  const [Ethereum_tax, setEthereum_tax] = useState("");
  const [SHIB_tax, setSHIB_tax] = useState("");
  const [SMART_tax, setSMART_tax] = useState("");
  const [SOL_tax, setSOL_tax] = useState("");
  const [TRX_tax, setTRX_tax] = useState("");
  const [USDC_tax, setUSDC_tax] = useState("");
  const [USDT_tax, setUSDT_tax] = useState("");
  const [XMR_tax, setXMR_tax] = useState("");
  const [XRP_tax, setXRP_tax] = useState("");
  const [ZEC_tax, setZEC_tax] = useState("");

  // Image
  const [BTC_img, setBTC_img] = useState("");
  const [BCH_img, setBCH_img] = useState("");
  const [LTC_img, setLTC_img] = useState("");
  const [VLX_img, setVLX_img] = useState("");
  const [ADA_img, setADA_img] = useState("");
  const [BNB_img, setBNB_img] = useState("");
  const [DAI_img, setDAI_img] = useState("");
  const [DASH_img, setDASH_img] = useState("");
  const [DGB_img, setDGB_img] = useState("");
  const [DIVI_img, setDIVI_img] = useState("");
  const [DOGE_img, setDOGE_img] = useState("");
  const [ETH_img, setETH_img] = useState("");
  const [Ethereum_img, setEthereum_img] = useState("");
  const [SHIB_img, setSHIB_img] = useState("");
  const [SMART_img, setSMART_img] = useState("");
  const [SOL_img, setSOL_img] = useState("");
  const [TRX_img, setTRX_img] = useState("");
  const [USDC_img, setUSDC_img] = useState("");
  const [USDT_img, setUSDT_img] = useState("");
  const [XMR_img, setXMR_img] = useState("");
  const [XRP_img, setXRP_img] = useState("");
  const [ZEC_img, setZEC_img] = useState("");

  useEffect(() => {
    client.balances({ all: 1 }, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        // console.log(result);
        setBTC_balance(result.BTC.balancef);
        setBCH_balance(result.BCH.balancef);
        setLTC_balance(result.LTC.balancef);
        setVLX_balance(result.VLX.balancef);
        setADA_balance(result[ADA].balancef);
        setBNB_balance(result.BNB.balancef);
        setDAI_balance(result.DAI.balancef);
        setDASH_balance(result.DASH.balancef);
        setDGB_balance(result.DGB.balancef);
        setDIVI_balance(result.DIVI.balancef);
        setDOGE_balance(result.DOGE.balancef);
        setETH_balance(result.ETH.balancef);
        setEthereum_balance(result[Ethereum].balancef);
        setSHIB_balance(result.SHIB.balancef);
        setSMART_balance(result.SMART.balancef);
        setSOL_balance(result.SOL.balancef);
        setTRX_balance(result.TRX.balancef);
        setUSDC_balance(result.USDC.balancef);
        setUSDT_balance(result[USDT].balancef);
        setXMR_balance(result.XMR.balancef);
        setXRP_balance(result[XR].balancef);
        setZEC_balance(result.ZEC.balancef);
      }
    });

    client.rates({ accepted: 2 }, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);

        // Rate
        setBTC_rate(result.BTC.rate_btc);
        setBCH_rate(result.BCH.rate_btc);
        setLTC_rate(result.LTC.rate_btc);
        setVLX_rate(result.VLX.rate_btc);
        setADA_rate(result[ADA].rate_btc);
        setBNB_rate(result.BNB.rate_btc);
        setDAI_rate(result.DAI.rate_btc);
        setDASH_rate(result.DASH.rate_btc);
        setDGB_rate(result.DGB.rate_btc);
        setDIVI_rate(result.DIVI.rate_btc);
        setDOGE_rate(result.DOGE.rate_btc);
        setETH_rate(result.ETH.rate_btc);
        setEthereum_rate(result[Ethereum].rate_btc);
        setSHIB_rate(result.SHIB.rate_btc);
        setSMART_rate(result.SMART.rate_btc);
        setSOL_rate(result.SOL.rate_btc);
        setTRX_rate(result.TRX.rate_btc);
        setUSDC_rate(result.USDC.rate_btc);
        setUSDT_rate(result[USDT].rate_btc);
        setXMR_rate(result.XMR.rate_btc);
        setXRP_rate(result[XR].rate_btc);
        setZEC_rate(result.ZEC.rate_btc);
        // Tax
        setBTC_tax(result.BTC.tx_fee);
        setBCH_tax(result.BCH.tx_fee);
        setLTC_tax(result.LTC.tx_fee);
        setVLX_tax(result.VLX.tx_fee);
        setADA_tax(result[ADA].tx_fee);
        setBNB_tax(result.BNB.tx_fee);
        setDAI_tax(result.DAI.tx_fee);
        setDASH_tax(result.DASH.tx_fee);
        setDGB_tax(result.DGB.tx_fee);
        setDIVI_tax(result.DIVI.tx_fee);
        setDOGE_tax(result.DOGE.tx_fee);
        setETH_tax(result.ETH.tx_fee);
        setEthereum_tax(result[Ethereum].tx_fee);
        setSHIB_tax(result.SHIB.tx_fee);
        setSMART_tax(result.SMART.tx_fee);
        setSOL_tax(result.SOL.tx_fee);
        setTRX_tax(result.TRX.tx_fee);
        setUSDC_tax(result.USDC.tx_fee);
        setUSDT_tax(result[USDT].tx_fee);
        setXMR_tax(result.XMR.tx_fee);
        setXRP_tax(result[XR].tx_fee);
        setZEC_tax(result.ZEC.tx_fee);

        // Image
        setBTC_img(result.BTC.image);
        setBCH_img(result.BCH.image);
        setLTC_img(result.LTC.image);
        setVLX_img(result.VLX.image);
        setADA_img(result[ADA].image);
        setBNB_img(result.BNB.image);
        setDAI_img(result.DAI.image);
        setDASH_img(result.DASH.image);
        setDGB_img(result.DGB.image);
        setDIVI_img(result.DIVI.image);
        setDOGE_img(result.DOGE.image);
        setETH_img(result.ETH.image);
        setEthereum_img(result[Ethereum].image);
        setSHIB_img(result.SHIB.image);
        setSMART_img(result.SMART.image);
        setSOL_img(result.SOL.image);
        setTRX_img(result.TRX.image);
        setUSDC_img(result.USDC.image);
        setUSDT_img(result[USDT].image);
        setXMR_img(result.XMR.image);
        setXRP_img(result[XR].image);
        setZEC_img(result.ZEC.image);
      }
    });
  }, []);

  // Crypto to USD
  let BTC_USD = BTC_balance / BTC_rate;
  let BCH_USD = BCH_balance / BCH_rate;
  let LTC_USD = LTC_balance / LTC_rate;
  let VLX_USD = VLX_balance / VLX_rate;
  let ADA_USD = ADA_balance / ADA_rate;
  let BNB_USD = BNB_balance / BNB_rate;
  let DAI_USD = DAI_balance / DAI_rate;
  let DASH_USD = DASH_balance / DASH_rate;
  let DGB_USD = DGB_balance / DGB_rate;
  let DIVI_USD = DIVI_balance / DIVI_rate;
  let DOGE_USD = DOGE_balance / DOGE_rate;
  let ETH_USD = ETH_balance / ETH_rate;
  let Ethereum_USD = Ethereum_balance / Ethereum_rate;
  let SHIB_USD = SHIB_balance / SHIB_rate;
  let SMART_USD = SMART_balance / SMART_rate;
  let SOL_USD = SOL_balance / SOL_rate;
  let TRX_USD = TRX_balance / TRX_rate;
  let USDC_USD = USDC_balance / USDC_rate;
  let USDT_USD = USDT_balance / USDT_rate;
  let XMR_USD = XMR_balance / XMR_rate;
  let XRP_USD = XRP_balance / XRP_rate;
  let ZEC_USD = ZEC_balance / ZEC_rate;

  return (
    <Fragment>
      <div className="p-3 ">
        <div
          className=" row card  "
          style={{ width: "100%", boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
        >
          <div className=" col p-3 ">
            <span style={{ color: "black" }} className="fw-bold">
              Total Balance
            </span>
            <h1>
              {BTC_balance}{" "}
              <span className="btn btn-warning px-2 py-0">BTC</span>
            </h1>
            <span>{BTC_USD} USD</span>
          </div>

          <div className="d-flex  p-3">
            <div
              className="  card border mx-2"
              style={{ width: "35%", boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
            >
              <div className=" col p-3 ">
                <span style={{ color: "black" }} className="fw-bold">
                  Exchange Balance
                </span>
                <h1>
                  {BTC_balance}
                  <span className="btn btn-warning px-2 py-0">BTC</span>
                </h1>
                <span style={{ color: "green" }}>{BTC_USD} USD</span>
              </div>
            </div>

            <div
              className="  card border  mx-2"
              style={{ width: "35%", boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
            >
              <div className="  p-3 ">
                <span style={{ color: "black" }} className="fw-bold">
                  Assets Balance
                </span>
                <h1>
                  {BTC_balance}
                  <span className="btn btn-warning px-2 py-0">BTC</span>
                </h1>
                <span style={{ color: "green" }}>{BTC_USD}USD</span>
              </div>
            </div>

            <div className="col-xl-4 px-2">
              <Card style={{ boxShadow: "none" }}>
                <div>
                  <span>Exchange Balance</span>
                  <ProgressBar now={60} variant="" className="mt-3" />
                </div>
                <div>
                  <span>Assets Balances</span>
                  <ProgressBar now={30} variant="" className="mt-3" />
                </div>{" "}
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 m-3 rounded">
        <h3>Assets Balance</h3>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Table Hover</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>ASSETS</th>
                    <th>SYMBOL</th>
                    <th>24H MARKET</th>
                    <th>AVAILABLE BALANCE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setBTC_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={BTC_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>BTC</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{BTC_balance}</h4>${BTC_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={BTC_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={BTC_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BTC Balance</h6>
                            <small className="">Bitcoin</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setBTC_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData1[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData1.map(
                                  (data, i) =>
                                    i !== tabData1.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData1.map(
                                  (data, i) =>
                                    i !== tabData1.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setBCH_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={BCH_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>BCH</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{BCH_balance}</h4>${BCH_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={BCH_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={BCH_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BCH Balance</h6>
                            <small className="">Bitcoin Cash</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setBCH_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData2[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData2.map(
                                  (data, i) =>
                                    i !== tabData2.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData2.map(
                                  (data, i) =>
                                    i !== tabData2.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setLTC_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={LTC_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>LTC</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{LTC_balance}</h4>${LTC_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={LTC_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={LTC_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">LTC Balance</h6>
                            <small className="">Litecoin</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setLTC_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData3[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData3.map(
                                  (data, i) =>
                                    i !== tabData3.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData3.map(
                                  (data, i) =>
                                    i !== tabData3.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setVLX_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={VLX_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>VLX</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{VLX_balance}</h4>${VLX_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={VLX_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={VLX_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">VLX Balance</h6>
                            <small className="">Velas (EVM)</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setVLX_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData4[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData4.map(
                                  (data, i) =>
                                    i !== tabData4.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData4.map(
                                  (data, i) =>
                                    i !== tabData4.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setADA_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={ADA_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>ADA</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{ADA_balance}</h4>${ADA_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={ADA_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={ADA_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">ADA.BEP2 Balance</h6>
                            <small className="">Cardano</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setADA_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData5[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData5.map(
                                  (data, i) =>
                                    i !== tabData5.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData5.map(
                                  (data, i) =>
                                    i !== tabData5.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setBNB_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={BNB_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>BNB</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{BNB_balance}</h4>${BNB_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={BNB_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={BNB_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BNB Balance</h6>
                            <small className="">BNB Coin</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setBNB_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData6[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData6.map(
                                  (data, i) =>
                                    i !== tabData6.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData6.map(
                                  (data, i) =>
                                    i !== tabData6.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setDAI_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={DAI_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>DAI</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{DAI_balance}</h4>${DAI_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={DAI_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={DAI_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">DAI Balance</h6>
                            <small className="">Dai (ERC20)</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setDAI_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData7[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData7.map(
                                  (data, i) =>
                                    i !== tabData7.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData7.map(
                                  (data, i) =>
                                    i !== tabData7.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setDASH_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={DASH_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>DASH</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{DASH_balance}</h4>${DASH_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={DASH_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={BTC_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">DASH Balance</h6>
                            <small className="">DASH</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setDASH_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData8[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData8.map(
                                  (data, i) =>
                                    i !== tabData8.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData8.map(
                                  (data, i) =>
                                    i !== tabData8.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setDGB_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={DGB_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>DGB</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{DGB_balance}</h4>${DGB_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={DGB_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={DGB_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">DGB Balance</h6>
                            <small className="">DigiByte</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setDGB_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData9[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData9.map(
                                  (data, i) =>
                                    i !== tabData9.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData9.map(
                                  (data, i) =>
                                    i !== tabData9.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setDIVI_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={DIVI_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>DIVI</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{DIVI_balance}</h4>${DIVI_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={DIVI_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={DIVI_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">DIVI Balance</h6>
                            <small className="">DIVI</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setDIVI_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData10[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData10.map(
                                  (data, i) =>
                                    i !== tabData10.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData10.map(
                                  (data, i) =>
                                    i !== tabData10.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setDOGE_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={DOGE_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>DOGE</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{DOGE_balance}</h4>${DOGE_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={DOGE_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={DOGE_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">DOGE Balance</h6>
                            <small className="">DOGE</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setDOGE_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData11[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData11.map(
                                  (data, i) =>
                                    i !== tabData11.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData11.map(
                                  (data, i) =>
                                    i !== tabData11.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setETH_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={ETH_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>ETH</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{ETH_balance}</h4>${ETH_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={ETH_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={ETH_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">ETH Balance</h6>
                            <small className="">Ether</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setETH_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData12[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData12.map(
                                  (data, i) =>
                                    i !== tabData12.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData12.map(
                                  (data, i) =>
                                    i !== tabData12.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setEthereum_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={Ethereum_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>ETH.BEP2</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{Ethereum_balance}</h4>${Ethereum_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal
                      className="fade d-flex"
                      show={Ethereum_modal}
                      size="lg"
                    >
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={Ethereum_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">ETH.BEP2 Balance</h6>
                            <small className="">Ethereum (BC Chain)</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setEthereum_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData13[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData13.map(
                                  (data, i) =>
                                    i !== tabData13.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData13.map(
                                  (data, i) =>
                                    i !== tabData13.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setSHIB_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={SHIB_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>SHIB</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{SHIB_balance}</h4>${SHIB_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={SHIB_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={SHIB_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">SHIB Balance</h6>
                            <small className="">SHIBA INU</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setSHIB_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData14[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData14.map(
                                  (data, i) =>
                                    i !== tabData14.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData14.map(
                                  (data, i) =>
                                    i !== tabData14.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setSMART_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={SMART_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>SMART</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{SMART_balance}</h4>${SMART_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={SMART_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={SMART_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">SMART Balance</h6>
                            <small className="">SMART CASH</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setSMART_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData15[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData15.map(
                                  (data, i) =>
                                    i !== tabData15.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData15.map(
                                  (data, i) =>
                                    i !== tabData15.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setSOL_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={SOL_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>SOL</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{SOL_balance}</h4>${SOL_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={SOL_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={SOL_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">SOL Balance</h6>
                            <small className="">Solana</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setSOL_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData16[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData16.map(
                                  (data, i) =>
                                    i !== tabData16.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData16.map(
                                  (data, i) =>
                                    i !== tabData16.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setTRX_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={TRX_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>TRX</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{TRX_balance}</h4>${TRX_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={TRX_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={TRX_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BTC Balance</h6>
                            <small className="">TRON</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setTRX_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData17[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData17.map(
                                  (data, i) =>
                                    i !== tabData17.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData17.map(
                                  (data, i) =>
                                    i !== tabData17.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setUSDC_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={USDC_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>USDC</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{USDC_balance}</h4>${USDC_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={USDC_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={USDC_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BTC Balance</h6>
                            <small className="">USD Coin (ERC20)</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setUSDC_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData18[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData18.map(
                                  (data, i) =>
                                    i !== tabData18.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData18.map(
                                  (data, i) =>
                                    i !== tabData18.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setUSDT_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={USDT_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>USDT</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{USDT_balance}</h4>${USDT_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={USDT_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={USDT_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BTC Balance</h6>
                            <small className="">Tether USD (BC Chain)</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setUSDT_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData19[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData19.map(
                                  (data, i) =>
                                    i !== tabData19.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData19.map(
                                  (data, i) =>
                                    i !== tabData19.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setXMR_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={XMR_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>XMR</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{XMR_balance}</h4>${XMR_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={XMR_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={XMR_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BTC Balance</h6>
                            <small className="">Monero</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setXMR_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData20[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData20.map(
                                  (data, i) =>
                                    i !== tabData20.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData20.map(
                                  (data, i) =>
                                    i !== tabData20.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setXRP_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={XRP_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>XR</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{XRP_balance}</h4>${XRP_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={XRP_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={XRP_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">XRP Balance</h6>
                            <small className="">XRP Token (BC Chain)</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setXRP_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData21[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData21.map(
                                  (data, i) =>
                                    i !== tabData21.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData21.map(
                                  (data, i) =>
                                    i !== tabData21.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>{" "}
                  <tr>
                    <td
                      className="sorting_1"
                      onClick={() => setZEC_modal(true)}
                    >
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={ZEC_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>ZEC</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary">
                      {" "}
                      <h4>{ZEC_balance}</h4>${ZEC_USD}
                    </td>

                    {/* <!-- Modal --> */}
                    <Modal className="fade d-flex" show={ZEC_modal} size="lg">
                      <Modal.Header>
                        <div className="row">
                          <div className="col-3 me-3">
                            <img src={ZEC_img} alt="" width={45} />{" "}
                          </div>
                          <div className="col">
                            <h6 className="mb-1">BTC Balance</h6>
                            <small className="">ZCash</small>
                          </div>
                        </div>

                        <Button
                          variant=""
                          className="btn-close"
                          onClick={() => setZEC_modal(false)}
                        ></Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="">
                          <Col lg="12">
                            <Tab.Container
                              defaultActiveKey={tabData22[0].name.toLowerCase()}
                            >
                              <Tab.Content className="">
                                {tabData22.map(
                                  (data, i) =>
                                    i !== tabData22.length - 1 && (
                                      <Tab.Pane
                                        eventKey={data.name.toLowerCase()}
                                        key={i}
                                      >
                                        <p>{data.content}</p>
                                      </Tab.Pane>
                                    )
                                )}
                              </Tab.Content>
                              <Nav as="ul" style={{ justifyContent: "center" }}>
                                {tabData22.map(
                                  (data, i) =>
                                    i !== tabData22.length - 1 && (
                                      <Nav.Item as="li" key={i}>
                                        <Nav.Link
                                          eventKey={data.name.toLowerCase()}
                                        >
                                          {i === 0 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                            >
                                              <strong>Home</strong>
                                            </button>
                                          ) : i === 1 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                backgroundColor: "#FFD600",
                                                color: "white",
                                                borderRadius: "10px",
                                              }}
                                            >
                                              <Arr /> <strong> Withdraw</strong>
                                            </button>
                                          ) : i === 2 ? (
                                            <button
                                              className="btn "
                                              type="submit"
                                              style={{
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "1px solid lightgray",
                                              }}
                                            >
                                              <Door /> <strong>Deposit</strong>
                                            </button>
                                          ) : i === 3 ? (
                                            "a"
                                          ) : (
                                            "b"
                                          )}
                                        </Nav.Link>
                                      </Nav.Item>
                                    )
                                )}
                              </Nav>
                            </Tab.Container>
                          </Col>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          {/* <!-- /# card --> */}
        </Col>
      </div>
    </Fragment>
  );
};
export default MyWallet;
