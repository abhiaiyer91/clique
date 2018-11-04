import useLocalStorage from "react-use/lib/useLocalStorage";

export default function useAuthToken() {
  return useLocalStorage("user-auth-token", "");
}
