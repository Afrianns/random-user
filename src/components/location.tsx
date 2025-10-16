import type { Location } from "../types/userType";

export default function Location(location: Location) {
  return (
    <section className="space-y-3 p-3">
      <h3 className="font-medium">Location</h3>
      <div className="border border-gray-100 bg-gray-50 py-2 px-3 rounded-lg">
        <div className="flex item-center justify-between">
          <span className="font-light">Coordinate</span>
          <a
            href={`https://www.openstreetmap.org/#map=17/${location.coordinates.latitude}/${location.coordinates.longitude}`}
            className="font-medium hover:underline"
            target="_blank"
          >
            {location.coordinates.latitude} - {location.coordinates.longitude}
          </a>
        </div>
        <div className="flex item-center justify-between">
          <span className="font-light">Timezone</span>
          <p className="font-medium">
            {location.timezone.offset} - {location.timezone.description}
          </p>
        </div>
      </div>
    </section>
  );
}
