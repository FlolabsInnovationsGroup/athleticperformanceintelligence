export type WearableDevice = {
  name: string;
  image: string;
};

export function WearableBrandGrid({ devices }: { devices: WearableDevice[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5">
      {devices.map((device) => (
        <figure
          key={device.name}
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="flex h-24 w-full items-center justify-center px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={device.image}
              alt={device.name}
              className="max-h-24 w-auto max-w-full object-contain"
            />
          </div>
          <figcaption className="text-sm font-medium text-foreground">
            {device.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
