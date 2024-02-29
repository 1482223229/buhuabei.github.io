import { post } from "@/utils/request.js";

interface Login {
  username: string;
  password: string;
}

export const loginRequest = (data: Login) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: 200, message: "success", success: true, data: true });
    }, 2000);
  });
};
