export const getServiceStatusColor = (status: string, style?: string) => {
  let statusFillColor = "#555555";

  switch (status) {
    case "FULLY_OPERATIONAL":
      statusFillColor = "#32b17e";
      break;

    case "MAJOR_OUTAGE":
      statusFillColor = "#fe4304";
      break;

    case "DEGRADED_PERFORMANCE":
      statusFillColor = "#f4cb16";
      break;
    case "PARTIAL_OUTAGE":
      statusFillColor = "#ec8c19";
      break;

    case "UNDER_MAINTENANCE":
      statusFillColor = "#555555";
      break;
  }

  if (style) {
    return `${style}-[${statusFillColor}]`;
  }

  return statusFillColor;
};
