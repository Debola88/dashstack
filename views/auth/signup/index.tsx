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
import { APP_LINKS } from "@/constants/app-links";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpView() {
  const { push } = useRouter();
  const [formData, setFormDate] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      // router.push("/login");
    } catch (err) {
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
            Create an Account
          </h1>
        </CardHeader>
        <CardDescription className="text-sm max-md:text-xs text-[#202224]/80 w-full text-center -mt-5">
          Create a account to continue
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
        </CardDescription>
        <CardContent className="w-full p-0 mt-2">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2 text-[#202224]/80">
              <Label>Email address:</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="adebolabadejo11@gmail.com"
                className="md:w-[400px]"
              />
            </div>
            <div className="space-y-2 text-[#202224]/80">
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="md:w-[400px]"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="●●●●●●"
                required
                minLength={6}
              />
              <p className="text-xs text-gray-500">
                Must be at least 6 characters
              </p>
              <div className="flex gap-2 mt-2 items-center">
                <Checkbox />
                <Label>I accept terms & conditions</Label>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#4880FF] w-3/4 hover:bg-[#4880FF]/70"
              >
                {loading ? "Creating Account..." : "Sign Up"}
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
