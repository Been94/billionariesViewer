import styles from "@/app/styles/Card.module.css";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { ApiProps, fetchInfo } from "../etc/Api";

export default function CardBackground() {
  const { isLoading, data } = useQuery<ApiProps[]>({
    queryKey: ["allInfo"],
    queryFn: () => fetchInfo("https://billions-api.nomadcoders.workers.dev/"),
  });

  return (
    <>
      {isLoading ? (
        <span className={styles.load}>Loading...</span>
      ) : (
        <div className={styles.background}>
          {data?.map((info, index) => (
            <Card
              key={index}
              id={info.id}
              industries={info.industries.toString()}
              name={info.name}
              netWorth={info.netWorth}
              squareImage={
                info.squareImage === "https:undefined"
                  ? "https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&amp;cropX1=0&amp;cropX2=800&amp;cropY1=0&amp;cropY2=800"
                  : info.squareImage
              }
            />
          ))}
        </div>
      )}
    </>
  );
}
