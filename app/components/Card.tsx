//카드 컴포넌트
import styles from "@/app/styles/Card.module.css";
import { ApiProps } from "../etc/Api";
import Link from "next/link";

function nameToUpper(userName: string) {
  const array = Array.from(userName);

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      array[i] = array[i].toUpperCase();
    }
    if (array[i].includes("-")) {
      array[i + 1] = array[i + 1].toUpperCase();
      array[i] = " ";
      break;
    }
  }
  return array.join("");
}

function moneyToBillion(money: number) {
  let tmp = money.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const array = tmp.split(".");
  tmp = array[0].replace("$", "").replace(",", ".");
  const result = Math.round(Number(tmp));
  return String(result) + " Billion";
}

export default function Card(props: ApiProps) {
  const userId = nameToUpper(props.id);
  const userMoney = moneyToBillion(props.netWorth);

  return (
    <Link href={`/person/${props.id}`}>
      <div className={styles.card}>
        <div
          style={{
            backgroundImage: `url(${props.squareImage})`,
            backgroundSize: `cover`,
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
