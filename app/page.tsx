"use client";
import { RecoilRoot } from "recoil";
import CardBackground from "./components/CardBackground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <CardBackground />
          <ReactQueryDevtools initialIsOpen={true} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
