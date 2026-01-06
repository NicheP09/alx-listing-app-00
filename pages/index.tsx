import { PROPERTYLISTINGSAMPLE } from '@/constants';

const filters = [
  'Top Villa',
  'Self Checkin',
  'Pet Friendly',
  'Luxury',
  'Beachfront',
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] bg-gray-800 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Find your favorite place here!
          </h2>
          <p className="mt-4 max-w-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl p-4 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <span
            key={filter}
            className="cursor-pointer rounded-full border px-4 py-2 text-sm hover:bg-black hover:text-white"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* LISTINGS */}
      <section className="mx-auto grid max-w-7xl gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.name}
            className="overflow-hidden rounded-lg border"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{property.name}</h3>
              <p className="text-sm text-gray-500">${property.price} / night</p>
              <p className="text-sm">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
