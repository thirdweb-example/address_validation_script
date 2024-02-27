# Airdrop Address Validation

Validates a set of addresses for eligibility for a ERC1155 airdrop.

## Setup

1. Set the environment variables

Copy the `.env.example` file into a new `.env` file. Fill in your thirdweb API key secret (get a free one from the [thirdweb dashboard](https://thirdweb.com/dashboard/settings))

2. Install dependencies

```bash
bun install
```

3. Run

```bash
bun index.ts
```

## Results

The script simulate an airdrop for each of the addresses and print in the console whether the wallet address is a valid recipient or not.

Example:

```
address 0x6347578d35d19647553ee71fb204c2f9b871d0f7 OK
address 0x4ce3ed2a0631d264ce164328aca945aaa9dc937d OK
address 0x4e65fe4dba92790696d040ac24aa414708f5c0ab OK
simulation failed for 0x4e65fe4dba92790696d040ac24aa414708f5c0ab Error - ERC1155: transfer to non-ERC1155Receiver implementer
```
