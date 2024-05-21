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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useState } from "react";

async function signUpUser({ email, username, password, groups }) {
  console.log("폼에서 받은 유저 정보 : ", email, username, password, groups);
  const res = await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
      groups,
    }),
  });
  const data = await res.json();
  return data;
}

export function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [groups, setGroups] = useState(["user"]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEmailValid, setUserEmailValid] = useState(true);

  const handleGroupsChange = (value) => {
    setGroups([value]);
  };
  const handlePwdChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPwdChange = (event) => {
    setConfirmPassword(event.target.value);
    checkPwdMatch(password, event.target.value);
  };
  const checkPwdMatch = (pwd, confirmPwd) => {
    setPasswordMatch(pwd === confirmPwd);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
    validateEmail(event.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setUserEmailValid(emailRegex.test(email));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userEmailValid || !passwordMatch) {
      return;
    }
    try {
      const data = await signUpUser({
        userEmail,
        username: userName,
        password,
        groups,
      });
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Select
                  value={groups[0]}
                  onValueChange={handleGroupsChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="user">user</SelectItem>
                      <SelectItem value="admin">admin</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="first-name">Name</Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  required
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={userEmail}
                  onChange={handleUserEmailChange}
                />
              </div>
              {!userEmailValid && <p>유효한 이메일이 아닙니다</p>}
              <div className="grid gap-2">
                <Label htmlFor="password">Create a Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePwdChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Confirm your Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPwdChange}
                />
              </div>

              {!passwordMatch && <p>비밀번호가 서로 다릅니다</p>}
              <Button
                type="submit"
                className="w-full"
              >
                Create an account
              </Button>
              <Button
                variant="outline"
                className="w-full"
              >
                Sign up with GitHub
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/user/login"
                className="underline"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
