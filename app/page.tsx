"use client";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <main
        //     className="
        //   flex h-full flex-col items-center justify-center bg-white
        // "
        >
          <div className="space-y-6 text-center flex-col justify-center items-center">
            <Image
              src="/bitcoin.png"
              alt="alt"
              width={100}
              height={100}
              className="ml-[160px]"
              loading="lazy"
            />
            <h1
              className={cn(
                "text-6xl font-semibold text-slate-800 drop-shadow-md dark:text-slate-100",
                font.className
              )}
            >
              CryptoTrades
            </h1>
            <p className="text-slate-700 text-lg dark:text-slate-200">
              A simple affiliate platform
            </p>

            <div>
              <LoginButton asChild>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-black dark:bg-slate-100 dark:text-slate-800 text-white hover:text-black hover:bg-yellow-500"
                >
                  Sign in
                </Button>
              </LoginButton>
            </div>
          </div>
        </main>
      </motion.div>
    </AuroraBackground>
  );
}
