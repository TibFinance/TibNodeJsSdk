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

## Two-step sign-in (merchant- or service-level users)

The Quick Start signs in with `ServerCaller.createSession`, which opens a client-level session. A user whose access is limited to a merchant or a service signs in with two calls instead:

1. Call `ServerCaller.getLoginAccessList` with the client ID, username and password. Each entry in `LoginRelations` is one access the user can open: `InternalReferenceType` gives its level (2 client, 4 merchant, 16 service) and `InternalReferenceId` the ID of that client, merchant or service. `Description` is a label for display only.
2. Call `ServerCaller.login` with the same client ID, username and password, and the `LoginsUserRelationsId` of the chosen entry.

Pass the returned `SessionId` as the `sessionToken` argument of the following calls, as with `ServerCaller.createSession`. Failed sign-in attempts count toward a temporary lockout, so do not retry in a loop.

```javascript
ServerCaller.getLoginAccessList("your_client_id", "your_username", "your_password")
  .then(accesses => {
    if (accesses.HasError) {
      throw new Error(accesses.Messages);
    }
    // Each entry is one access: pick the one to open
    // (InternalReferenceType: 2 client, 4 merchant, 16 service).
    const access = accesses.LoginRelations[0];
    return ServerCaller.login("your_client_id", "your_username", "your_password", access.LoginsUserRelationsId);
  })
  .then(response => {
    if (response.HasError) {
      throw new Error(response.Messages);
    }
    return ServerCaller.listServices(response.SessionId);
  })
  .then(services => console.log(services))
  .catch(err => console.error("Request failed:", err.message || err));
```

## Documentation

For the complete API reference and guides, visit [doc.tib.finance](https://doc.tib.finance).

This SDK provides access to **70 API methods** for payment processing, merchant management, and financial operations.

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
