import type { Login } from "../types/userType";

export default function LoginData(login: Login) {
  return (
    <section className="space-y-3 p-3">
      <h3 className="font-medium">Login Data</h3>
      <div className="border border-gray-100 bg-gray-50 py-2 px-3 rounded-lg">
        <div className="flex item-center justify-between">
          <span className="font-light">Username</span>
          <p className="font-medium">{login.username}</p>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">Password</span>
          <p className="font-medium">
            {login.password.slice(-4).padStart(login.password.length, "*")}
          </p>
        </div>
      </div>
    </section>
  );
}
