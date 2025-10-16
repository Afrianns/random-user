import type { Location } from "../types/userType";

export default function Address(location: Location) {
  return (
    <section className="space-y-3 p-3">
      <h3 className="font-medium">Address</h3>
      <div className="border border-gray-100 bg-gray-50 py-2 px-3 rounded-lg text-sm space-y-2">
        <div className="flex item-center justify-between">
          <span className="font-light">Country</span>
          <p className="font-medium">{location.country}</p>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">City</span>
          <p className="font-medium">{location.city}</p>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">State</span>
          <p className="font-medium">{location.state}</p>
        </div>

        <div className="flex item-center justify-between">
          <span className="font-light">Street</span>
          <p className="font-medium">
            {location.street.number} {location.street.name}
          </p>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">Post Code</span>
          <p className="font-medium">{location.postcode}</p>
        </div>
      </div>
    </section>
  );
}
