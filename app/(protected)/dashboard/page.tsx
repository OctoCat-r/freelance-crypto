"use client";
import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { InfiniteMovingCards } from "@/components/ui/infitnite-moving-cards";
// import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
// import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrentUser } from "@/hooks/use-current-user";
import { DrawerDialogDemo } from "@/components/modals/fund";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useCurrentUser();

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi {user?.name}, Welcome back 👋
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            {/* <CalendarDateRangePicker /> */}
            {/* <Button>Add Balance</Button> */}
            <DrawerDialogDemo />
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Income
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$43.89</div>
                  <p className="text-xs text-muted-foreground">
                    +3.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Wallet Fund
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$23.1</div>
                  <p className="text-xs text-muted-foreground">
                    +18% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Availble Balance
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$120</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Withdrawls
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$57</div>
                  <p className="text-xs text-muted-foreground">
                    +20% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 md:col-span-7">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                  />
                  <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                  />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-7">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
const testimonials = [
  {
    quote: "$ 0.00",
    name: "Appraisal",
    icon: "/abc.webp",
  },
  {
    quote: "$ 0.00",
    name: "TRP Income",
    icon: "/business.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Introduction",
    icon: "/calendar.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Advisory",
    icon: "/digital-wallet.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "My Trade",
    icon: "/gross.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Team Trade",
    icon: "/group.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Total Trade",
    icon: "/growth.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "My Partner",
    icon: "/level.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "My Direct Partner",
    icon: "/level.png-2.webp",
  },
  {
    quote: "$ 0.00",
    name: "Active Partner",
    icon: "/payment.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Today Income",
    icon: "/pie-chart.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Today Buisness",
    icon: "/reffer.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Today Withdraw",
    icon: "/salary.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Balance to wallet",
    icon: "/wallet-to-wallet.png.webp",
  },
  {
    quote: "$ 0.00",
    name: "Wallet to Wallet",
    icon: "/wallet.png.webp",
  },
];
