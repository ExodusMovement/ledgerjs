import Str from "@exodus/hw-app-str";

export default async transport => {
  const str = new Str(transport);
  const result = await str.getAppConfiguration();
  return result;
};
