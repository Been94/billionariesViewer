import styles from "@/app/styles/Card.module.css";
import { ApiProps } from "../etc/Api";
import Link from "next/link";
import { moneyToBillion, nameToUpper } from "../etc/etc";

export default function Card(props: ApiProps) {
  const userId = nameToUpper(props.id);
  const userMoney = moneyToBillion(props.netWorth);

  return (
    <Link
      href={{
        pathname: `/person/${props.id}`,
        query: { id: props.id },
      }}
      as={`/person/${props.id}`}
    >
      <div className={styles.card}>
        <div
          style={{
            backgroundImage: `url(${props.squareImage})`,
            backgroundSize: `cover`,
            zIndex: 1,
          }}
        />
        <span>{userId}</span>
        <span>
          {userMoney} / {props.industries}
        </span>
      </div>
    </Link>
  );
}
