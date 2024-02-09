import { getServiceStatusBasedOnIncident, getServiceStatusColor } from "./util";

export type StatussyncWidgetProps = {
  slug: string;
};

export type StatussyncStatusData = {
  service: {
    name: string;
    id: string;
    status: string;
    lastSync: string;
    chartData: any[];
  };
  incidents: Array<{}>;
};

export const getServiceData = async (slug: string) => {
  const req = await fetch(`https://statussync.dev/api/v1/${slug}/status`, {
    method: "GET",
    cache: "no-cache",
  });

  if (req.ok) {
    const data = (await req.json()) as StatussyncStatusData;
    return data;
  }

  //
  return {
    service: {
      name: slug,
      id: slug,
      status: "DEGRADED PERFORMANCE",
      lastSync: "Service not found",
      chartData: [],
    },
    incidents: [],
  } as StatussyncStatusData;
};

export async function StatussyncWidget({ slug }: StatussyncWidgetProps) {
  const data = await getServiceData(slug);

  let statusColorClassName = getServiceStatusColor(
    data.service.status.replaceAll(" ", "_")
  );

  return (
    <span className="flex items-center gap-1">
      <button
        data-state="closed"
        className="z-50 transition-colors duration-100 hover:cursor-pointer text-slate-500 hover:text-slate-300"
      >
        <span className="relative flex h-3 w-3">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{
              backgroundColor: statusColorClassName,
            }}
          ></span>
          <span
            className="relative inline-flex rounded-full h-3 w-3"
            style={{
              backgroundColor: statusColorClassName,
            }}
          ></span>
        </span>
      </button>
      <p className="font-normal text-dimmed text-xs uppercase">{status}</p>
    </span>
  );
}
