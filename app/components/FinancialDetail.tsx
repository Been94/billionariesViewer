import { ApiDetailProps } from "../etc/Api";
import styles from "@/app/styles/CardFinancialDetail.module.css";

export default function FinancialDetail(props: ApiDetailProps) {
  const { financialAssets } = props;
  return (
    <>
      <div className={styles.CardFinanialTitle}>
        <span>Finanial Assets</span>
      </div>
      <div className={styles.CardFinanialBackground}>
        {financialAssets!.map((data, index) => (
          <div key={index} className={styles.CardFinanialInfo}>
            <span>{data.ticker}</span>
            <span>{data.numberOfShares}</span>
            <span>{data.exerciseOptionPrice}</span>
          </div>
        ))}
      </div>
    </>
  );
}
