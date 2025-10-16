import type { Id } from "../types/userType";

export default function Id(id: Id) {
  return (
    <section className="space-y-3 p-3">
      <h3 className="font-medium">Id</h3>
      <div className="border border-gray-100 bg-gray-50 py-2 px-3 rounded-lg">
        <div className="flex item-center justify-between">
          <span className="font-light">Name</span>
          <a href=""></a>
          <p className="font-medium">{id.name}</p>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">Value</span>
          <p className="font-medium">{id.value}</p>
        </div>
      </div>
    </section>
  );
}
