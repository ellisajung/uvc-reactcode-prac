import { Link } from "react-router-dom";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

async function loginUser({ email, password }) {
  console.log("폼에서 받은 유저 정보 : ", email, password);
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // JSON 형식으로 요청 본문을 작성
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.access_token; // Assuming the token is returned in the 'token' field
}

export function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser({ email: userEmail, password });
      localStorage.setItem("token", token); // 토큰을 로컬 스토리지에 저장

      const decodedToken = jwtDecode(token); // 토큰 디코딩
      console.log("서버에서 받은 정보 : ", token);
      console.log("로그인 성공 후 받은 토큰 : ", decodedToken);

      navigate("/"); // 로그인 성공 시 대시보드로 이동
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      console.log("Login failed: " + error.message); // 오류 메시지를 사용자에게 표시
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={userEmail}
                onChange={handleUserEmail}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={handlePassword}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="#"
              className="underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
