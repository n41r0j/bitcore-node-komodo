# Fee Service

The fee service is a requirement of the insight-api-zclassic service (not a bitcore-node built-in service). Its primary purpose is to query a zclassic full node for the most up-to-date miner fees for transactions. A Zclassic Full-Node ([Zclassic](https://github.com/z-classic/zclassic)) with an available RPC interface is required.

 [BTC1](https://github.com/btc1/bitcoin) or [bcoin](https://github.com/bcoin-org/bcoin)) for Bitcore's reference examples of Bitcoin nodes

## Service Configuration

```json
"fee": {
  "rpc": {
    "user": "user",
      "pass": "pass",
      "host": "localhost",
      "protocol": "http",
      "port": 8032
  }
}
```
## Usage Example

```bash
curl http://localhost:3001/insight-api-zclassic/estimateFee
```
