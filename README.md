# TIB Finance Node.js SDK

![Node.js](https://img.shields.io/badge/node.js-14%2B-green)

Node.js SDK for the TIB Finance payment processing API.

## Installation

```bash
git clone https://github.com/TibFinance/TibNodeJsSdk.git
cd TibNodeJsSdk
npm install
```

## Quick Start

```javascript
const { ServerCaller } = require('./tib-finance/ServerCaller');
const { CryptoCaller } = require('./tib-finance/CryptoCaller');

CryptoCaller.initialize("https://sandboxportal.tib.finance");

ServerCaller.createSession("your_client_id", "your_username", "your_password")
  .then(response => {
    console.log(response.SessionId);
  });
```

## Documentation

For the complete API reference and guides, visit [doc.tib.finance](https://doc.tib.finance).

This SDK provides access to **56 API methods** for payment processing, merchant management, and financial operations.

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
