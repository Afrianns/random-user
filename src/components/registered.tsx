import type { Registered } from "../types/userType";
import convertDate from "../utils/convertDate";

export default function Registered(registered: Registered) {
  return (
    <section className="space-y-3 p-3">
      <h3 className="font-medium">Registered Date</h3>
      <div className="border border-gray-100 bg-gray-50 py-2 px-3 rounded-lg">
        <div className="flex item-center justify-between">
          <span className="font-light">Date</span>
          <p className="font-medium">{convertDate(registered.date)}</p>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">Age</span>
          <p className="font-medium">{registered.age}</p>
        </div>
      </div>
    </section>
  );
}
