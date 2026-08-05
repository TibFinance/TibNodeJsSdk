# TIB Finance Node.js SDK

![Node.js](https://img.shields.io/badge/node.js-14%2B-green)

Node.js SDK for the TIB Finance payment processing API.

## Installation

```bash
git clone https://github.com/TibFinance/TibNodeJsSdk.git
cd TibNodeJsSdk
npm install
```

Alternatively, download the packaged tarball (`.tgz`) from the latest [GitHub release](https://github.com/TibFinance/TibNodeJsSdk/releases) and install it with `npm install <file>.tgz`.

## Quick Start

```javascript
const { ServerCaller } = require('./tib-finance/ServerCaller');

ServerCaller.initialize("https://sandboxportal.tib.finance");

ServerCaller.createSession("your_client_id", "your_username", "your_password")
  .then(response => {
    if (response.HasError) {
      console.error("Session failed:", response.Messages);
      return;
    }
    console.log(response.SessionId);
  })
  .catch(err => console.error("Request failed:", err.message || err));
```

## Documentation

For the complete API reference and guides, visit [doc.tib.finance](https://doc.tib.finance).

This SDK provides access to **64 API methods** for payment processing, merchant management, and financial operations.

## Other TIB Finance SDKs

| SDK | Repository |
|-----|------------|
| Python | [TibPythonSdk](https://github.com/TibFinance/TibPythonSdk) |
| Java | [TibJavaSdk](https://github.com/TibFinance/TibJavaSdk) |
| .NET Core | [TibDotNetCoreSdk](https://github.com/TibFinance/TibDotNetCoreSdk) |
| .NET Framework | [TibDotNetSdk](https://github.com/TibFinance/TibDotNetSdk) |
| PHP | [TibPhpSdk](https://github.com/TibFinance/TibPhpSdk) |
| JavaScript (Browser) | [TibJavascriptSdk](https://github.com/TibFinance/TibJavascriptSdk) |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- Documentation: [doc.tib.finance](https://doc.tib.finance)
- Email: support@tib.finance
