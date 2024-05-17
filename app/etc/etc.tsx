export function moneyToBillion(money: number) {
  let tmp = money.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const array = tmp.split(".");
  tmp = array[0].replace("$", "").replace(",", ".");
  const result = Math.round(Number(tmp));
  return String(result) + " Billion";
}
export function nameToUpper(userName: string) {
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
