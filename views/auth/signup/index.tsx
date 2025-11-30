"use client"
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
import { APP_LINKS } from "@/constants/app-links";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignUpView() {
    const { push } = useRouter();

  return (
    <div className="grid place-items-center min-h-screen w-full bg-[#4880FF] @container/card">
      <Card className="md:p-10 p-5">
        <CardHeader>
          <h1 className="text-black md:text-2xl text-xl font-bold w-full text-center">
            Create an Account
          </h1>
        </CardHeader>
        <CardDescription className="text-sm max-md:text-xs text-[#202224]/80 w-full text-center -mt-5">
          Create a account to continue
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
              <Label>Username</Label>
              <Input
                placeholder="Username"
                type="text"
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
                <Label>I accept terms & conditions</Label>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button className="bg-[#4880FF] w-3/4 hover:bg-[#4880FF]/70">
                Sign Up
              </Button>
              <div className="flex justify-center mt-2 md:text-sm text-xs font-medium items-center">
                <p>Already have an account?</p>
                <Button
                  variant="link"
                  type="button"
                  className="text-[#5A8CFF] underline cursor-pointer"
                  onClick={() => push(APP_LINKS.LOGIN)}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
