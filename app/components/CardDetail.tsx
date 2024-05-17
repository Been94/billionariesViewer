import styles from "@/app/styles/CardDetail.module.css";
import { ApiDetailProps } from "../etc/Api";
import { moneyToBillion, nameToUpper } from "../etc/etc";

export default function CardDetail(props: ApiDetailProps) {
  const { id, country, industries, squareImage, bio, netWorth } = props;
  return (
    <div className={styles.CardDetail}>
      <div className={styles.CardDetailInfo}>
        <div
          className={styles.CardDetailImg}
          style={{
            backgroundImage: `url(${squareImage})`,
            backgroundSize: `cover`,
          }}
        />
        <div>
          <span>{nameToUpper(id!)}</span>
          <span>Networth: {moneyToBillion(Number(netWorth))}</span>
          <span>Country: {country}</span>
          <span>Industries: {industries}</span>
          <span>{bio}</span>
        </div>
      </div>
    </div>
  );
}
