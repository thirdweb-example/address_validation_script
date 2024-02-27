import { config } from "dotenv";
import {
  createThirdwebClient,
  getContract,
  prepareContractCall,
  simulateTransaction,
} from "thirdweb";
import { base } from "thirdweb/chains";

config();

const addresses = [
  "0x10d3e40aeb8f01050b47ff606c9d19c013c7e938",
  "0x69badf095b03d62e97445eb0142e6488d19ff38b",
  "0xc7fd7296b5d75561998cfabfde41f0018e776c1a",
  "0xa7a9857897a801bf8f47bc1654a95e20dbbeb62f",
  "0x789be27a65addd0a582fe011a733482a28b21a8e",
  "0xe72e50c4c031cda9828b2af9452d30c8cb41e02f",
  "0x139705a6b7f44bcc48d9d34b8ebda3e42a06ac34",
  "0x5da9300916944d5f0293bbed39c22d9dba0be07e",
  "0xdb30e7eb6c4fd03d5d1f6ee97b084a742ca0cfff",
  "0xddc96d288c90857b74500636c4a6984b4ca463fd",
  "0x37ffbbee75b446b2854efff46736642be7a70a95",
  "0xc182ebde4ab4c7644598635e8fd53a26056c6a21",
  "0x60ef209b8cd27351f62eb1f50cc25c6e7de56e6e",
  "0x4eac51d1cc2359bedc26dc3ba107147486e0f322",
  "0x650e30c9d63c144b927daf01ea2da75afb05b2e4",
  "0xe40dad4a29273f22ecc7adfb3dbfacf338dcc24d",
  "0xcc64cde5f401404063066a8d63857b2354cb3d9c",
  "0x33945c2936aebc634f1f5f2ed31a969f37dbf1db",
  "0x0a96f8812dd408f22f8af32556da325f319b0320",
  "0xf377de21d3680d530102915a586ebed9247787dd",
  "0x0bb25d31b1cbe0bc06d80c4f2c2e5e82cb87072c",
  "0x55a1811bbbc1a955d99333144533fa026c120729",
  "0xe4be4867bf42499607f1cbab178300d48a489ece",
  "0xa6fe88fb3c3f36f6b41b809d53435b5b1bf8bb69",
  "0xdb91b22f8a62dd4cea81a68c82d667ef51bee26c",
  "0x6443d6766aef18b10f9ade62c86093b67a9c306a",
  "0x4c8ddba2707d0ad0548629095eb28760c81e6928",
  "0x34c49b21163683049beb28016c5cc2fb06216917",
  "0x98f70c96b13bd1bf6eb95e263c1950570a1a1a00",
  "0xe98849d87c211734783ef9d8933ef77b94ad2c81",
  "0xd5844c4157a8c4f3c113328c5e24d510b4b31be6",
  "0x2fb2f7b31aef53e12eac189027cfa5b0755763de",
  "0x72e80f41f1cc08404d493d894f1dcaa5e76015a7",
  "0xfa4572b4e734587fe0b4d415a92e6654c0c71460",
  "0x06a1e61244e6a55fd52375b3fab913af9249952b",
  "0xd400cbff2a43ee8cbd62b23b7e50133badb6be74",
  "0xc01f58c62d48ce5550388b488fa561c48af212a2",
  "0x924dcdca42e7fcd0258c5a4a2333aa9d86e79ea4",
  "0x116c93aebd1508aee97d6c2f35ac4b87954069fd",
  "0xba59b22aa9d8ac80d64a3d95c5b2ac491f3ab6d0",
  "0xa3b00c06234038bf90138a22af760b61747844da",
  "0x6347578d35d19647553ee71fb204c2f9b871d0f7",
  "0x4ce3ed2a0631d264ce164328aca945aaa9dc937d",
  "0x4e65fe4dba92790696d040ac24aa414708f5c0ab",
  "0xbb79012f0de84b35d563f4bbaa9c157579bdc9b4",
  "0xb49cf5b5f4f03a4dd4b46c0d7c2db6091a908101",
  "0x99bc5a3fef947d62b3fabc2c6ed40bb07b8e544f",
  "0xcf3e06aca92039f2e534b1cbb11f1956376b6c3a",
  "0xc11f5bca59c81788b4aa71339b8e5eac8d21a784",
  "0x31d71168d7e5d01c5719225917e350b15edb7790",
  "0xae9a5dde2fb83c2faac364d49b1aebe2992163f7",
  "0x0b795cf99008cb67b72e5b17625307ca6f80fb70",
  "0xe3328598fc72f0f373da020defd52f2e01551e89",
  "0x2f573144967a40e654efb65c104ae01d94367c79",
  "0x73767570ebec5800b75a48cce2fc0a8d1031871d",
  "0xf4570f3193fc66b0668eb2f7cc1c8dbb19e13d0c",
  "0xb6da1b456cde06668488e54f73427ca83d3200a7",
  "0x68ac4bd3b97717da9c67889e0680704cfd0019b6",
  "0x6dd1a8484fd73d591ff4d5b9c434c2b138e23f07",
  "0x25c86d2aa6f6d686f6bdfa9b3bee908c59de11ac",
  "0x2977efea4820e4da5d6d1c7d69a13ae4e75722a4",
  "0x9ebe31860dee061b6d3670a5b80c89285d2b9780",
  "0x66e1efa710f37ef61ab748453c9856703b9ca4de",
  "0x2e32e3c59a8259c7ffeb971f83237b0335245ad8",
  "0x74703c8f59f9ffc643cc809519a5da93c04910f5",
  "0xa4280aa612790ba38cc23a321a48e3587e0f1200",
  "0xa46dffcbbea5e6a2577c7566cccd568329aa4aff",
  "0x1775c077c098a2a667abae607fc18e5387db9926",
  "0xd2be2cea5a326edb8d39e920beb03d6499544f98",
  "0xc4edccfe7eecab346aa9c8a3843edde74fb66538",
  "0x102bd3474afdb897badcb5aceab46364dfe1014a",
  "0x677d7a32269ec39ad4db385c09d8262449c2b9dd",
  "0x551b2ea99c85f69819e8e1af80e46394c71108d0",
  "0x207760813c25df14af19db268e8183dd7e828437",
  "0xe98931069374ebad462f369f18f32d71a3db55c1",
  "0xda22919e01e249ba4c96dba46bee29e4981835fc",
  "0x1f2dabf6f7dcbea088ab50aacd180fe92564b354",
  "0x59df0572eef2513afb46b9cd5fccafd9201e65c2",
  "0x74fc589c867732005524a2212ccefa9839ff01c5",
  "0xa53ff0dfda8a4f4de6588ec47de73fe103b4a3c6",
];

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_SECRET as string,
});

const contract = getContract({
  client,
  chain: base,
  address: "0xA6cFEAAE26D709a74544Be33E31746411f8810a0",
});

const main = async () => {
  for (const addr of addresses) {
    const transaction = prepareContractCall({
      contract,
      method:
        "function safeTransferFrom(address,address,uint256,uint256,bytes)",
      params: [
        "0xC785D6AD03275d09CB9Df5d8eC1816f305399D67",
        addr,
        0n,
        1n,
        "0x",
      ],
    });
    console.log("address", addr, "OK");
    try {
      await simulateTransaction({
        transaction,
        from: "0xC785D6AD03275d09CB9Df5d8eC1816f305399D67",
      });
    } catch (e: any) {
      console.log("simulation failed for", addr, e.message);
    }
  }
};
main();
