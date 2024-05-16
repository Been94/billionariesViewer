import styles from "@/app/styles/CardDetail.module.css";
import { ApiDetailProps } from "../etc/Api";

export default function CardDetail(props: ApiDetailProps) {
  const {
    id,
    state,
    city,
    name,
    country,
    position,
    industries,
    financialAssets,
  } = props;
  return (
    <div className={styles.CardDetail}>
      <div>img</div>
      <span>title</span>
      <span>netwoth</span>
      <span>country</span>
      <span>industry</span>
      <span>desc</span>
      <ul>
        {financialAssets.map((asset) => (
          <li key={asset.exchange + asset.ticker}>
            Exchange: {asset.exchange}
            <br />
            Ticker: {asset.ticker}
            <br />
            Company Name: {asset.companyName}
            <br />
            Number of Shares: {asset.numberOfShares}
            <br />
            Share Price: {asset.sharePrice} ({asset.currencyCode})
            <br />
            Exchange Rate: {asset.exchangeRate}
            <br />
            Interactive: {asset.interactive ? "Yes" : "No"}
            <br />
            Current Price: {asset.currentPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}
