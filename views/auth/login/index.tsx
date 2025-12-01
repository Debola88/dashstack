"use client";
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
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { APP_LINKS } from "@/constants/app-links";

export default function LoginView() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Login error:", err); // Add this for debugging
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}
        <CardContent className="w-full p-0 mt-2">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2 text-[#202224]/80">
              <Label>Email address:</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adebolabadejo11@gmail.com"
                type="email"
                className="md:w-[400px]"
                value={email}
                required
              />
            </div>
            <div className="space-y-2 text-[#202224]/80">
              <div className="flex justify-between">
                <Label>Password</Label>
                <Link href="#" className="md:text-sm text-xs font-semibold">
                  Forget Password?
                </Link>
              </div>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="●●●●●●"
                value={password}
                required
              />
              <div className="flex gap-2 mt-2 items-center">
                <Checkbox />
                <Label>Remember Password</Label>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#4880FF] w-3/4 hover:bg-[#4880FF]/70"
              >
                {loading ? "Loading..." : "Sign In"}
              </Button>
              <div className="flex justify-center mt-2 md:text-sm text-xs font-medium items-center">
                <p>Don&apos;t have an account?</p>
                <Button
                  variant="link"
                  type="button"
                  className="text-[#5A8CFF] underline cursor-pointer"
                  onClick={() => router.push(APP_LINKS.SIGNUP_HOME)}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}