import React, { useState } from "react";
import styles from "./Login.module.scss";

const Login = ({ login }) => {
  const [userId, setID] = useState("");
  const [password, setPW] = useState("");

  const handleClick = () => {
    try {
      login({ userId, password });
    } catch (e) {
      setID("");
      setPW("");
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_box}>
          <div className={styles.login_guide}></div>

          <div className={styles.login_item}>
            <form className={styles.login_item_content}>
              <h1>Welcome to Admin Page!</h1>
              <p className={styles.header_text}>
                송아지의 서비스를 통해 쉽게 재고와 예약상태를 관리해보세요.
                <br />
                더욱 편리하고 간편하게 어쩌고 저쩌고.. 더욱 편리하고 간편하게
                어쩌고 저쩌고..
              </p>

              <div className={styles.animated_div}>
                <input
                  type="text"
                  name="user"
                  value={userId}
                  onChange={({ target: { value } }) => setID(value)}
                />
                <label className={styles.animated_label}>User ID</label>
              </div>
              <div className={styles.animated_div}>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={({ target: { value } }) => setPW(value)}
                />
                <label className={styles.animated_label}>Password</label>
              </div>
              <div className={styles.btn}>
                <button className={styles.signInBtn} onClick={handleClick}>
                  로그인
                </button>
                <button className={styles.signUpBtn}>회원가입</button>
              </div>

              <p className={styles.bottom_text}>
                Welcome to Song A ZiWelcomeasddsa to Song A ZiWelcome to Song A
                ZiWelcome to Song A ZiWelcome to Song A ZiWelcome to Song A Zi
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
