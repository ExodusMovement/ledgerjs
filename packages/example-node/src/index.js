import TransportNodeHid from "@exodus/hw-transport-node-hid";
import AppBtc from "@exodus/hw-app-btc";

async function example() {
  const transport = await TransportNodeHid.create(5000);
  transport.setDebugMode(true);
  const appBtc = new AppBtc(transport);
  const o = await appBtc.getWalletPublicKey("44'/0'/0'/0");
  console.log("getWalletPublicKey:", o);
}

example();
