"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: { children: ReactNode }) {
    const [qc] = useState(() => new QueryClient());
    
    return (
        <QueryClientProvider client={qc}>
            {children}
            <Toaster richColors position="top-right" />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}