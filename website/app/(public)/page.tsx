"use client";

import { useQuery } from "@tanstack/react-query";
import { HeroPost } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import MoreInfo from "../_components/more-info";
import Navbar from "../_components/navbar";
import { toast } from "sonner";


export default function HomePage() {
    const health = useQuery({
        queryKey: ['health'],
        queryFn: async () => {
            const r = await fetch('api/health');
            if (!r.ok) throw new Error('health failed');
            return r.json() as Promise<{ status: string; time: string }>;
        },
    });




    return(
        <div className="min-h-screen">
            <Navbar />
            <main id="main" className="pt-4">
                <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
                    <Intro />
                    <HeroPost />
                </section>
                <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
                   <MoreInfo />
                </section>
                    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Project Foundation</h2>

      <div className="rounded border p-4">
        <h3 className="mb-2 font-medium">React Query → /api/health</h3>
        {health.isLoading && <p>Loading...</p>}
        {health.isError && <p className="text-red-600">Error: {(health.error as any).message}</p>}
        {health.data && (
          <pre className="rounded bg-gray-50 p-3 text-sm">
            {JSON.stringify(health.data, null, 2)}
          </pre>
        )}
      </div>

      <button
        className="rounded bg-black px-4 py-2 text-white"
        onClick={() => toast.success("Toaster wired up!")}
      >
        Show success toast
      </button>
    </section>
            </main>
        </div>
    )
}