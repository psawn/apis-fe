import { useEffect, useState } from "react";
import { getProfileApi } from "../../services/user.service";
import { notification } from "antd";

function Profile() {
  const [api, contextHolder] = notification.useNotification();
  const [profile, setProfile] = useState({ email: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const userToken = localStorage.getItem("user-token");
        const result = await getProfileApi(`${userToken}`);
        setProfile(result.data);
      } catch (error: any) {
        api.error({
          message: "Error",
          description: error.response.data.message,
        });
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <>{contextHolder}</>
      <h1>This is profile</h1>
      {profile && <p>Username: {profile.email}</p>}
    </>
  );
}

export default Profile;
