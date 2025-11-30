import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function LoginView() {
  return (
    <div className="grid place-items-center min-h-screen w-full bg-[#4880FF] @container/card">
      <Card className="md:p-10 p-5">
        <CardHeader>
          <h1 className="text-black md:text-2xl text-xl font-bold w-full text-center">
            Login to Account
          </h1>
        </CardHeader>
        <CardDescription className="text-sm max-md:text-xs text-[#202224]/80 w-full text-center -mt-5">
          Please enter your email and password to continue
        </CardDescription>
        <CardContent className="w-full p-0 mt-2">
          <form className="w-full space-y-6">
            <div className="space-y-2 text-[#202224]/80">
              <Label>Email address:</Label>
              <Input
                placeholder="adebolabadejo11@gmail.com"
                type="email"
                className="md:w-[400px]"
              />
            </div>
            <div className="space-y-2 text-[#202224]/80">
              <div className="flex justify-between">
                <Label>Password</Label>
                <Link href="#" className="md:text-sm text-xs font-semibold">
                  Forget Password?
                </Link>
              </div>
              <Input type="password" placeholder="●●●●●●" />
              <div className="flex gap-2 mt-2 items-center">
                <Checkbox />
                <Label>Remember Password</Label>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button className="bg-[#4880FF] w-3/4 hover:bg-[#4880FF]/70">Sign In</Button>
              <div className="flex justify-center mt-2 md:text-sm text-xs font-medium">
                <p>Don&apos;t have an account?</p>
                <Link href="#" className="text-[#5A8CFF] underline">
                 {" "}Create Account
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
