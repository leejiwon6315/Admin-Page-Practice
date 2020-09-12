import React from "react";
import Main from "../components/Main";

const usersInfo = [
  // 임시 데이터 베이스
  { userId: "kingJiwon", password: "qwer1234" },
];

const SignIn = (userId, password) => {
  const user = usersInfo.find(
    (user) => user.userId === userId && user.password === password
  );

  if (user === undefined) {
    console.log(user);
    alert("회원정보가 올바르지 않습니다");
    return;
  }

  return <Main />;
};

export default SignIn;
