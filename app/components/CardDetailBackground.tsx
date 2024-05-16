import styles from "@/app/styles/CardDetail.module.css";
import CardDetail from "./CardDetail";
import FinancialDetail from "./FinancialDetail";
import { useQuery } from "@tanstack/react-query";
import { ApiDetailProps, fetchInfo } from "../etc/Api";
import { useParams } from "next/navigation";

export default function CardDetailBackground() {
  const params = useParams();

  const { isLoading, results } = useQuery<ApiDetailProps[]>({
    queryKey: ["allDetail"],
    queryFn: () =>
      fetchInfo(
        `https://billions-api.nomadcoders.workers.dev/person/${params.id}`
      ),
  });
  // console.log(data);

  return (
    <>
      <div className={styles.background}>
        {results.map}
        {/* {results?.map((detail, index) => (
          <CardDetail
            id={detail.id}
            state={detail.state}
            city="aa"
            name="cc"
            country="xx"
            position={1}
            industries="aa"
            financialAssets={[
              {
                exchange: "exchange1",
                ticker: "ticker1",
                companyName: "company1",
                numberOfShares: 100,
                sharePrice: "12.34",
                currencyCode: "USD",
                exchangeRate: 1.23,
                interactive: true,
                currentPrice: 15.43,
              },
              {
                exchange: "exchange2",
                ticker: "ticker2",
                companyName: "company2",
                numberOfShares: 200,
                sharePrice: "56.78",
                currencyCode: "EUR",
                exchangeRate: 0.87,
                interactive: false,
                currentPrice: 62.45,
              },
            ]}
            thumbnail="a"
            squareImage="b"
            bio="desc"
            about="a"
            netWorth="cx"
          />
        ))} */}

        <FinancialDetail />
      </div>
    </>
  );
}
