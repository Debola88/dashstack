import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function PriceCard() {
  return (
    <React.Fragment>
      <Card className="w-full text-center">
        <CardHeader className="text-black font-semibold text-lg">
          Basic
        </CardHeader>
        <CardDescription className="-mt-6">
          <p>Monthly Charge</p>
        </CardDescription>
        <CardContent>
          <p className="text-[#4880FF] text-3xl font-bold -mt-5">$14.99</p>
          <Separator className="my-10 border" />
          <ul className="space-y-3 text-sm font-semibold">
            <li>Free Setup</li>
            <li>Bandwidth Limit 10GB</li>
            <li>20 User Connection</li>
            <li className="text-[#212121]/40">Analytic Report</li>
            <li className="text-[#212121]/40">Public API Access</li>
            <li className="text-[#212121]/40">Plugins Integration</li>
            <li className="text-[#212121]/40">Custom Content management</li>
          </ul>
          <Separator className="my-10 border" />
          <Button className="rounded-full bg-white text-[#4880FF] border-2 border-[#4880FF] p-5 hover:bg-[#4880FF] hover:text-white">
            Get Started
          </Button>
          <CardFooter className="flex justify-center">
            <Link href="#" className="underline pt-4 text-sm">
              Start your 30 Days free trial
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
      <Card className="w-full text-center">
        <CardHeader className="text-black font-semibold text-lg">
          Standard
        </CardHeader>
        <CardDescription className="-mt-6">
          <p>Monthly Charge</p>
        </CardDescription>
        <CardContent>
          <p className="text-[#4880FF] text-3xl font-bold -mt-5">$49.99</p>
          <Separator className="my-10 border" />
          <ul className="space-y-3 text-sm font-semibold">
            <li>Free Setup</li>
            <li>Bandwidth Limit 10GB</li>
            <li>20 User Connection</li>
            <li>Analytic Report</li>
            <li>Public API Access</li>
            <li className="text-[#212121]/40">Plugins Integration</li>
            <li className="text-[#212121]/40">Custom Content management</li>
          </ul>
          <Separator className="my-10 border" />
          <Button className="rounded-full bg-white text-[#4880FF] border-2 border-[#4880FF] p-5 hover:bg-[#4880FF] hover:text-white">
            Get Started
          </Button>
          <CardFooter className="flex justify-center">
            <Link href="#" className="underline pt-4 text-sm">
              Start your 30 Days free trial
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
      <Card className="w-full text-center">
        <CardHeader className="text-black font-semibold text-lg">
          Premium
        </CardHeader>
        <CardDescription className="-mt-6">
          <p>Monthly Charge</p>
        </CardDescription>
        <CardContent>
          <p className="text-[#4880FF] text-3xl font-bold -mt-5">$89.99</p>
          <Separator className="my-10 border" />
          <ul className="space-y-3 text-sm font-semibold">
            <li>Free Setup</li>
            <li>Bandwidth Limit 10GB</li>
            <li>20 User Connection</li>
            <li>Analytic Report</li>
            <li>Public API Access</li>
            <li>Plugins Integration</li>
            <li>Custom Content management</li>
          </ul>
          <Separator className="my-10 border" />
          <CardAction>
            <Button className="rounded-full bg-white text-[#4880FF] border-2 border-[#4880FF] p-5 hover:bg-[#4880FF] hover:text-white">
              Get Started
            </Button>
          </CardAction>
          <CardFooter className="flex justify-center">
            <Link href="#" className="underline pt-4 text-sm">
              Start your 30 Days free trial
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
