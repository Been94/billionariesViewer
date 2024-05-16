"use client";
import CardDetailBackground from "@/app/components/CardDetailBackground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Detail() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CardDetailBackground />
      </QueryClientProvider>
    </>
  );
}
