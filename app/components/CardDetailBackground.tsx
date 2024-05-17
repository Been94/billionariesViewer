import styles from "@/app/styles/CardDetail.module.css";
import { ApiDetailProps, fetchInfo } from "../etc/Api";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import CardDetail from "./CardDetail";
import FinancialDetail from "./FinancialDetail";

export default function CardDetailBackground() {
  const pathname = usePathname();
  const { isLoading, data } = useQuery<ApiDetailProps>({
    queryKey: ["allDetail"],
    queryFn: () =>
      fetchInfo(`https://billions-api.nomadcoders.workers.dev${pathname}`),
  });

  return (
    <>
      {isLoading || !data ? (
        <span className={styles.load}>Loading...</span>
      ) : (
        <div className={styles.background}>
          <div />
          <CardDetail
            id={data.id}
            state={data.state}
            city={data.city}
            name={data.name}
            country={data.country}
            position={data.position}
            industries={data.industries}
            financialAssets={data.financialAssets}
            thumbnail={data.thumbnail}
            squareImage={data.squareImage}
            bio={data.bio}
            about={data.about}
            netWorth={data.netWorth}
          />
          <div />
          <div />
          <div className={styles.CardDetailFinancial}>
            <FinancialDetail financialAssets={data.financialAssets} />
          </div>
          <div />
        </div>
      )}
    </>
  );
}
