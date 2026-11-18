
const { CryptoCaller } = require("./CryptoCaller");

class ServerCaller {

    static initialize(baseUrl) {
        CryptoCaller.initialize(baseUrl);
    }

    /**
     * Opens a client-level session for a user who has client-level access to the given ClientId. Send the returned SessionId as SessionToken on the following calls. For a merchant-level or service-level access, use GetLoginAccessList, then Login.
     * @param {string} clientId
     * @param {string} username
     * @param {string} password
     * @returns {object}
     */
    static createSession(clientId, username, password) {
        var methodName = "/Data/CreateSession";

        var data = {
            "ClientId": clientId,
            "Username": username,
            "Password": password,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the accesses of a user. Each entry is one access that Login can open a session on (usually a client, a merchant or a service) and gives the LoginsUserRelationsId to pass to Login.
     * @param {string} clientId
     * @param {string} username
     * @param {string} password
     * @returns {object}
     */
    static getLoginAccessList(clientId, username, password) {
        var methodName = "/Data/GetLoginAccessList";

        var data = {
            "ClientId": clientId,
            "Username": username,
            "Password": password,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Opens a session on one access of a user, usually a client, a merchant or a service. Call GetLoginAccessList first and pass the LoginsUserRelationsId of the access to open. Send the returned SessionId as SessionToken on the following calls. On a merchant-level session, each MerchantId described as automatically set for merchant-level logins takes the session's merchant, whatever value is sent.
     * @param {string} clientId
     * @param {string} username
     * @param {string} password
     * @param {string} loginsUserRelationsId
     * @returns {object}
     */
    static login(clientId, username, password, loginsUserRelationsId) {
        var methodName = "/Data/Login";

        var data = {
            "ClientId": clientId,
            "Username": username,
            "Password": password,
            "LoginsUserRelationsId": loginsUserRelationsId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the services.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @returns {object}
     */
    static listServices(sessionToken, merchantId) {
        var methodName = "/Data/ListServices";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the service.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} merchantId
     * @returns {object}
     */
    static getService(sessionToken, serviceId, merchantId) {
        var methodName = "/Data/GetService";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves wallet information for a service, including the effective balance (wallet balance plus available delay buffer minus pending collections), the risk-adjusted withdrawable amount, processing status, and whether the new wallet feature is active.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @returns {object}
     */
    static getWalletInformationsByService(sessionToken, serviceId) {
        var methodName = "/Data/GetWalletInformationsByService";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the merchants.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} merchantId
     * @param {boolean} includeClientMerchants
     * @returns {object}
     */
    static listMerchants(sessionToken, serviceId, merchantId, includeClientMerchants) {
        var methodName = "/Data/ListMerchants";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
            "IncludeClientMerchants": includeClientMerchants,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves the payment provider boarding (onboarding) status for all merchants within a service. Returns each merchant's boarding progress with their current status.
     * @param {string} sessionToken
     * @param {string} boardingServiceId
     * @returns {object}
     */
    static getServiceBoardingStatus(sessionToken, boardingServiceId) {
        var methodName = "/Data/GetServiceBoardingStatus";

        var data = {
            "SessionToken": sessionToken,
            "BoardingServiceId": boardingServiceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the merchant.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {MerchantModel} merchantInfo
     * @returns {object}
     */
    static createMerchant(sessionToken, serviceId, merchantInfo) {
        var methodName = "/Data/CreateMerchant";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantInfo": merchantInfo,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Adds a new bank account (i.e., new merchant in TIB's data model) to an existing fully-boarded service. Authorizes the new merchant on insert. One-shot semantic: no pending state, no approval workflow, no confirmation email. Owner and Currency are inherited from an active sibling merchant on the same service. This is a parallel path to CreateMerchant (which serves boarding's first-merchant insert).
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} name
     * @param {string} email
     * @param {string} language
     * @param {string} bankNumber
     * @param {string} institutionNumber
     * @param {string} accountNumber
     * @returns {object}
     */
    static addBankAccount(sessionToken, serviceId, name, email, language, bankNumber, institutionNumber, accountNumber) {
        var methodName = "/Data/AddBankAccount";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "Name": name,
            "Email": email,
            "Language": language,
            "BankNumber": bankNumber,
            "InstitutionNumber": institutionNumber,
            "AccountNumber": accountNumber,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the merchant.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @returns {object}
     */
    static getMerchant(sessionToken, merchantId) {
        var methodName = "/Data/GetMerchant";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Saves the merchant.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {MerchantModel} merchantInfo
     * @returns {object}
     */
    static saveMerchant(sessionToken, merchantId, merchantInfo) {
        var methodName = "/Data/SaveMerchant";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "MerchantInfo": merchantInfo,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Saves the merchant basic information.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {MerchantModelBasicInfo} merchantInfo
     * @returns {object}
     */
    static saveMerchantBasicInfo(sessionToken, merchantId, merchantInfo) {
        var methodName = "/Data/SaveMerchantBasicInfo";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "MerchantInfo": merchantInfo,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Saves the merchant account information. This operation is protected by two-factor authentication. On first use the response carries two-factor setup instructions (TwoFactorStatus and TwoFactorSetupData); see the Two-factor authentication guide.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {AccountModel} account
     * @param {string} twoFactorCode
     * @param {string} twoFactorSecurityAnswer
     * @returns {object}
     */
    static saveMerchantAccountInfo(sessionToken, merchantId, account, twoFactorCode, twoFactorSecurityAnswer) {
        var methodName = "/Data/SaveMerchantAccountInfo";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "Account": account,
            "TwoFactorCode": twoFactorCode,
            "TwoFactorSecurityAnswer": twoFactorSecurityAnswer,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Deletes the merchant.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @returns {object}
     */
    static deleteMerchant(sessionToken, merchantId) {
        var methodName = "/Data/DeleteMerchant";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the merchants by external identifier.
     * @param {string} sessionToken
     * @param {string} externalSystemId
     * @param {string} externalSystemGroupId
     * @returns {object}
     */
    static getMerchantsByExternalId(sessionToken, externalSystemId, externalSystemGroupId) {
        var methodName = "/Data/GetMerchantsByExternalId";

        var data = {
            "SessionToken": sessionToken,
            "ExternalSystemId": externalSystemId,
            "ExternalSystemGroupId": externalSystemGroupId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Adjusts a merchant's wallet balance. IncreaseWallet collects the amount from the merchant (by EFT, or by Interac when requested) and credits the wallet; DecreaseWallet withdraws it from the wallet balance, subject to the risk-adjusted withdrawable balance. Requires the wallet feature to be enabled for the service. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} merchantId
     * @param {number} amount
     * @param {string} mode
     * @param {boolean} useInterac
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static adjustWallet(sessionToken, serviceId, merchantId, amount, mode, useInterac, idempotencyKey) {
        var methodName = "/Data/AdjustWallet";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
            "Amount": amount,
            "Mode": mode,
            "UseInterac": useInterac,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the customers.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} merchantId
     * @returns {object}
     */
    static listCustomers(sessionToken, serviceId, merchantId) {
        var methodName = "/Data/ListCustomers";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the customer.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {CustomerEntity} customer
     * @returns {object}
     */
    static createCustomer(sessionToken, serviceId, customer) {
        var methodName = "/Data/CreateCustomer";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "Customer": customer,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a new customer in a service. Every call creates a new customer and never returns an existing one, even when the same CustomerName or CustomerExternalId is already in use: a repeated CustomerExternalId is allowed. To reuse a customer, look it up first, for example with GetCustomersByExternalId and a MerchantId of the service, and create one only when none is found. CustomerName, Language, ContactInfo.Email and ContactInfo.Phone are required: a missing or malformed value refuses the call (2003), its message names the fields to correct, and nothing is created. This operation requires the IdempotencyKey field: for at least 24 hours, a repeated call with the same key and the same request returns the first response and creates no second customer. After a 2003 about a customer value, send the corrected call with a new key. After a 2003 about the key, the first call with that key may have created the customer: look it up first. After a 2007 or a 2016, send the same request again with the same key. The service must be one your session can act for; read-only logins cannot call it.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {CustomerV2Model} customer
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createCustomerV2(sessionToken, serviceId, customer, idempotencyKey) {
        var methodName = "/Data/CreateCustomerV2";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "Customer": customer,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the customer.
     * @param {string} sessionToken
     * @param {string} customerId
     * @param {string} merchantId
     * @returns {object}
     */
    static getCustomer(sessionToken, customerId, merchantId) {
        var methodName = "/Data/GetCustomer";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Saves the customer.
     * @param {string} sessionToken
     * @param {CustomerModel} customer
     * @param {string} merchantId
     * @returns {object}
     */
    static saveCustomer(sessionToken, customer, merchantId) {
        var methodName = "/Data/SaveCustomer";

        var data = {
            "SessionToken": sessionToken,
            "Customer": customer,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Updates only a customer's contact information (email, phone, address, language) without touching the rest of the customer record. Use this when editing the contact card in isolation: fields left null preserve the stored value, empty strings clear it, and non-empty values overwrite.
     * @param {string} sessionToken
     * @param {string} customerId
     * @param {ContactInfoModel} contactInfo
     * @returns {object}
     */
    static saveCustomerContactInfo(sessionToken, customerId, contactInfo) {
        var methodName = "/Data/SaveCustomerContactInfo";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
            "ContactInfo": contactInfo,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Deletes the customer.
     * @param {string} sessionToken
     * @param {string} customerId
     * @returns {object}
     */
    static deleteCustomer(sessionToken, customerId) {
        var methodName = "/Data/DeleteCustomer";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the customers by external identifier.
     * @param {string} sessionToken
     * @param {string} externalCustomerId
     * @param {string} merchantId
     * @returns {object}
     */
    static getCustomersByExternalId(sessionToken, externalCustomerId, merchantId) {
        var methodName = "/Data/GetCustomersByExternalId";

        var data = {
            "SessionToken": sessionToken,
            "ExternalCustomerId": externalCustomerId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the payment methods.
     * @param {string} sessionToken
     * @param {string} customerId
     * @param {string} merchantId
     * @returns {object}
     */
    static listPaymentMethods(sessionToken, customerId, merchantId) {
        var methodName = "/Data/ListPaymentMethods";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the credit card payment method.
     * @param {string} sessionToken
     * @param {string} currency
     * @param {string} customerId
     * @param {boolean} isCustomerAutomaticPaymentMethod
     * @param {CreditCardModel} creditCard
     * @param {string} zipCode
     * @param {string} language
     * @returns {object}
     */
    static createCreditCardPaymentMethod(sessionToken, currency, customerId, isCustomerAutomaticPaymentMethod, creditCard, zipCode, language) {
        var methodName = "/Data/CreateCreditCardPaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "Currency": currency,
            "CustomerId": customerId,
            "IsCustomerAutomaticPaymentMethod": isCustomerAutomaticPaymentMethod,
            "CreditCard": creditCard,
            "ZipCode": zipCode,
            "Language": language,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the direct account payment method.
     * @param {string} sessionToken
     * @param {string} customerId
     * @param {boolean} isCustomerAutomaticPaymentMethod
     * @param {AccountModel} account
     * @param {string} language
     * @returns {object}
     */
    static createDirectAccountPaymentMethod(sessionToken, customerId, isCustomerAutomaticPaymentMethod, account, language) {
        var methodName = "/Data/CreateDirectAccountPaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
            "IsCustomerAutomaticPaymentMethod": isCustomerAutomaticPaymentMethod,
            "Account": account,
            "Language": language,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the Interac payment method.
     * @param {string} sessionToken
     * @param {string} customerId
     * @param {boolean} isCustomerAutomaticPaymentMethod
     * @param {InteracModel} interacInformation
     * @param {string} language
     * @param {string} merchantId
     * @returns {object}
     */
    static createInteracPaymentMethod(sessionToken, customerId, isCustomerAutomaticPaymentMethod, interacInformation, language, merchantId) {
        var methodName = "/Data/CreateInteracPaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
            "IsCustomerAutomaticPaymentMethod": isCustomerAutomaticPaymentMethod,
            "InteracInformation": interacInformation,
            "Language": language,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the payment method.
     * @param {string} sessionToken
     * @param {string} paymentMethodId
     * @returns {object}
     */
    static getPaymentMethod(sessionToken, paymentMethodId) {
        var methodName = "/Data/GetPaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "PaymentMethodId": paymentMethodId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Deletes the payment method.
     * @param {string} sessionToken
     * @param {string} paymentMethodId
     * @returns {object}
     */
    static deletePaymentMethod(sessionToken, paymentMethodId) {
        var methodName = "/Data/DeletePaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "PaymentMethodId": paymentMethodId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Sets the default payment method.
     * @param {string} sessionToken
     * @param {string} customerId
     * @param {string} paymentMethodId
     * @returns {object}
     */
    static setDefaultPaymentMethod(sessionToken, customerId, paymentMethodId) {
        var methodName = "/Data/SetDefaultPaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "CustomerId": customerId,
            "PaymentMethodId": paymentMethodId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the bills.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} merchantId
     * @param {Date} fromDateTime
     * @param {Date} toDateTime
     * @returns {object}
     */
    static listBills(sessionToken, serviceId, merchantId, fromDateTime, toDateTime) {
        var methodName = "/Data/ListBills";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
            "FromDateTime": fromDateTime,
            "ToDateTime": toDateTime,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the bill.
     * @param {string} sessionToken
     * @param {BillEntity} billData
     * @param {boolean} breakIfMerchantNeverBeenAuthorized
     * @returns {object}
     */
    static createBill(sessionToken, billData, breakIfMerchantNeverBeenAuthorized) {
        var methodName = "/Data/CreateBill";

        var data = {
            "SessionToken": sessionToken,
            "BillData": billData,
            "BreakIfMerchantNeverBeenAuthorized": breakIfMerchantNeverBeenAuthorized,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the bill.
     * @param {string} sessionToken
     * @param {string} billId
     * @param {string} merchantId
     * @returns {object}
     */
    static getBill(sessionToken, billId, merchantId) {
        var methodName = "/Data/GetBill";

        var data = {
            "SessionToken": sessionToken,
            "BillId": billId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Deletes the bill.
     * @param {string} sessionToken
     * @param {string} billId
     * @param {string} merchantId
     * @returns {object}
     */
    static deleteBill(sessionToken, billId, merchantId) {
        var methodName = "/Data/DeleteBill";

        var data = {
            "SessionToken": sessionToken,
            "BillId": billId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the transfers.
     * @param {string} sessionToken
     * @param {string} paymentFilterLevel
     * @param {string} levelFilterId
     * @param {boolean} markResolvedOnly
     * @param {Date} fromDate
     * @param {Date} toDate
     * @param {string} transferGroupId
     * @param {string} transferType
     * @param {string} externalMerchantGroupId
     * @param {boolean} onlyWithErrors
     * @returns {object}
     */
    static listTransfers(sessionToken, paymentFilterLevel, levelFilterId, markResolvedOnly, fromDate, toDate, transferGroupId, transferType, externalMerchantGroupId, onlyWithErrors) {
        var methodName = "/Data/ListTransfers";

        var data = {
            "SessionToken": sessionToken,
            "PaymentFilterLevel": paymentFilterLevel,
            "LevelFilterId": levelFilterId,
            "MarkResolvedOnly": markResolvedOnly,
            "FromDate": fromDate,
            "ToDate": toDate,
            "TransferGroupId": transferGroupId,
            "TransferType": transferType,
            "ExternalMerchantGroupId": externalMerchantGroupId,
            "OnlyWithErrors": onlyWithErrors,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves a filtered, summarized list of transfers for a service using an optimized query. Supports filtering by transfer type, date range, merchant, transfer group, error status, and resolved status.
     * @param {string} sessionToken
     * @param {Date} fromDate
     * @param {Date} toDate
     * @param {string} serviceId
     * @param {string} merchantId
     * @param {string} transferGroupId
     * @param {string} transferType
     * @param {boolean} markResolvedOnly
     * @param {string} externalMerchantGroupId
     * @param {boolean} onlyWithErrors
     * @returns {object}
     */
    static listTransfersFast(sessionToken, fromDate, toDate, serviceId, merchantId, transferGroupId, transferType, markResolvedOnly, externalMerchantGroupId, onlyWithErrors) {
        var methodName = "/Data/ListTransfersFast";

        var data = {
            "SessionToken": sessionToken,
            "FromDate": fromDate,
            "ToDate": toDate,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
            "TransferGroupId": transferGroupId,
            "TransferType": transferType,
            "MarkResolvedOnly": markResolvedOnly,
            "ExternalMerchantGroupId": externalMerchantGroupId,
            "OnlyWithErrors": onlyWithErrors,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the transfers of a bill.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} billId
     * @returns {object}
     */
    static listTransfersForBillFast(sessionToken, merchantId, billId) {
        var methodName = "/Data/ListTransfersForBillFast";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "BillId": billId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves all active recurring transfers for a given service, including their next scheduled recurrence date and associated merchant information.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @returns {object}
     */
    static getRecuringTransfers(sessionToken, serviceId) {
        var methodName = "/Data/GetRecuringTransfers";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Deletes a recurring transfer by its identifier, stopping all future scheduled occurrences.
     * @param {string} sessionToken
     * @param {string} recuringTransferId
     * @returns {object}
     */
    static deleteRecuringTransfer(sessionToken, recuringTransferId) {
        var methodName = "/Data/DeleteRecuringTransfer";

        var data = {
            "SessionToken": sessionToken,
            "RecuringTransferId": recuringTransferId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the payment. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} billId
     * @param {boolean} setPaymentCustomerFromBill
     * @param {string} customerEmail
     * @param {PaymentEntity} paymentInfo
     * @param {string} merchantId
     * @param {string} externalReferenceId
     * @param {boolean} safetyToBreakIfOverRemainingBillAmount
     * @param {string} autorizedPaymentMethod
     * @param {boolean} askForCustomerConsent
     * @param {boolean} doNotSendEmail
     * @param {boolean} immediateTransfer
     * @param {string} statementDescription
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createPayment(sessionToken, billId, setPaymentCustomerFromBill, customerEmail, paymentInfo, merchantId, externalReferenceId, safetyToBreakIfOverRemainingBillAmount, autorizedPaymentMethod, askForCustomerConsent, doNotSendEmail, immediateTransfer, statementDescription, idempotencyKey) {
        var methodName = "/Data/CreatePayment";

        var data = {
            "SessionToken": sessionToken,
            "BillId": billId,
            "SetPaymentCustomerFromBill": setPaymentCustomerFromBill,
            "CustomerEmail": customerEmail,
            "PaymentInfo": paymentInfo,
            "MerchantId": merchantId,
            "ExternalReferenceId": externalReferenceId,
            "SafetyToBreakIfOverRemainingBillAmount": safetyToBreakIfOverRemainingBillAmount,
            "AutorizedPaymentMethod": autorizedPaymentMethod,
            "AskForCustomerConsent": askForCustomerConsent,
            "DoNotSendEmail": doNotSendEmail,
            "ImmediateTransfer": immediateTransfer,
            "StatementDescription": statementDescription,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the payment.
     * @param {string} sessionToken
     * @param {string} paymentId
     * @returns {object}
     */
    static getPayment(sessionToken, paymentId) {
        var methodName = "/Data/GetPayment";

        var data = {
            "SessionToken": sessionToken,
            "PaymentId": paymentId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Deletes the payment.
     * @param {string} sessionToken
     * @param {string} paymentId
     * @returns {object}
     */
    static deletePayment(sessionToken, paymentId) {
        var methodName = "/Data/DeletePayment";

        var data = {
            "SessionToken": sessionToken,
            "PaymentId": paymentId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the direct Interac transaction. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {InteracModel} interacInformation
     * @param {string} transferDirection
     * @param {Date} dueDate
     * @param {number} amount
     * @param {string} statementDescription
     * @param {string} currency
     * @param {string} language
     * @param {string} referenceNumber
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createDirectInteracTransaction(sessionToken, merchantId, interacInformation, transferDirection, dueDate, amount, statementDescription, currency, language, referenceNumber, idempotencyKey) {
        var methodName = "/Data/CreateDirectInteracTransaction";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "InteracInformation": interacInformation,
            "TransferDirection": transferDirection,
            "DueDate": dueDate,
            "Amount": amount,
            "StatementDescription": statementDescription,
            "Currency": currency,
            "Language": language,
            "ReferenceNumber": referenceNumber,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Uploads a payment file, as text. Once the file is accepted, each transaction in the file becomes one bank-account payment. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} rawAcpFileContent
     * @param {string} merchantId
     * @param {boolean} isImmediate
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createTransactionFromRaw(sessionToken, rawAcpFileContent, merchantId, isImmediate, idempotencyKey) {
        var methodName = "/Data/CreateTransactionFromRaw";

        var data = {
            "SessionToken": sessionToken,
            "RawAcpFileContent": rawAcpFileContent,
            "MerchantId": merchantId,
            "IsImmediate": isImmediate,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the executed operations.
     * @param {string} sessionToken
     * @param {Date} fromDate
     * @param {Date} toDate
     * @param {string} transferType
     * @param {string} transferGroupId
     * @param {boolean} onlyWithErrors
     * @param {string} merchantId
     * @param {string} dateType
     * @param {string} serviceId
     * @returns {object}
     */
    static listExecutedOperations(sessionToken, fromDate, toDate, transferType, transferGroupId, onlyWithErrors, merchantId, dateType, serviceId) {
        var methodName = "/Data/ListExecutedOperations";

        var data = {
            "SessionToken": sessionToken,
            "FromDate": fromDate,
            "ToDate": toDate,
            "TransferType": transferType,
            "TransferGroupId": transferGroupId,
            "OnlyWithErrors": onlyWithErrors,
            "MerchantId": merchantId,
            "DateType": dateType,
            "ServiceId": serviceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Forces immediate processing of a transfer that would otherwise wait for the next scheduled run. For supplier transfers, only the paying merchant (fee-payer) can force-process; the recipient supplier cannot force-execute a transfer they did not create. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} paymentId
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static forcePaymentProcess(sessionToken, paymentId, idempotencyKey) {
        var methodName = "/Data/ForcePaymentProcess";

        var data = {
            "SessionToken": sessionToken,
            "PaymentId": paymentId,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Gets the drop in public token.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} customerId
     * @param {string} billId
     * @param {number} amount
     * @param {string} transferType
     * @param {string} dropInAuthorizedPaymentMethod
     * @param {string} externalReferenceNumber
     * @param {boolean} showCustomerExistingPaymentMethods
     * @param {string} language
     * @param {number} expirationDays
     * @param {string} title
     * @param {string} description
     * @param {Date} paymentDueDate
     * @returns {object}
     */
    static getDropInPublicToken(sessionToken, merchantId, customerId, billId, amount, transferType, dropInAuthorizedPaymentMethod, externalReferenceNumber, showCustomerExistingPaymentMethods, language, expirationDays, title, description, paymentDueDate) {
        var methodName = "/Data/GetDropInPublicToken";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "CustomerId": customerId,
            "BillId": billId,
            "Amount": amount,
            "TransferType": transferType,
            "DropInAuthorizedPaymentMethod": dropInAuthorizedPaymentMethod,
            "ExternalReferenceNumber": externalReferenceNumber,
            "ShowCustomerExistingPaymentMethods": showCustomerExistingPaymentMethods,
            "Language": language,
            "ExpirationDays": expirationDays,
            "Title": title,
            "Description": description,
            "PaymentDueDate": paymentDueDate,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the free operation. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} billId
     * @param {string} customerId
     * @param {string} paymentMethodId
     * @param {string} transferType
     * @param {string} referenceNumber
     * @param {number} amount
     * @param {string} language
     * @param {Date} transactionDueDate
     * @param {string} transferTitle
     * @param {string} transferDescription
     * @param {string} transferExternalSystemNumber
     * @param {string} transferFrequency
     * @param {Date} recurringEndDate
     * @param {string} groupId
     * @param {boolean} immediateTransfer
     * @param {string} statementDescription
     * @param {boolean} stopSameIdentifications
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createFreeOperation(sessionToken, merchantId, billId, customerId, paymentMethodId, transferType, referenceNumber, amount, language, transactionDueDate, transferTitle, transferDescription, transferExternalSystemNumber, transferFrequency, recurringEndDate, groupId, immediateTransfer, statementDescription, stopSameIdentifications, idempotencyKey) {
        var methodName = "/Data/CreateFreeOperation";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "BillId": billId,
            "CustomerId": customerId,
            "PaymentMethodId": paymentMethodId,
            "TransferType": transferType,
            "ReferenceNumber": referenceNumber,
            "Amount": amount,
            "Language": language,
            "TransactionDueDate": transactionDueDate,
            "TransferTitle": transferTitle,
            "TransferDescription": transferDescription,
            "TransferExternalSystemNumber": transferExternalSystemNumber,
            "TransferFrequency": transferFrequency,
            "RecurringEndDate": recurringEndDate,
            "GroupId": groupId,
            "ImmediateTransfer": immediateTransfer,
            "StatementDescription": statementDescription,
            "StopSameIdentifications": stopSameIdentifications,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a batch of free operations (deposits or collections) in a single call. Validates that client onboarding (KYC) is completed before allowing free deposit operations. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {Array} freeOperationBatchList
     * @param {string} groupId
     * @param {boolean} stopSameIdentifications
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createFreeOperationBatch(sessionToken, freeOperationBatchList, groupId, stopSameIdentifications, idempotencyKey) {
        var methodName = "/Data/CreateFreeOperationBatch";

        var data = {
            "SessionToken": sessionToken,
            "FreeOperationBatchList": freeOperationBatchList,
            "GroupId": groupId,
            "StopSameIdentifications": stopSameIdentifications,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Submits up to 5,000 collections and deposits for one merchant in a single call. Each item carries its customer and either a bank account or an Interac recipient; every item is checked when the call is made and gets its own result. Accepted items are processed in the background, in request order; read their outcome with GetTransferBatchResult and the reply's BatchId. A merchant session acts for its own merchant; a client or service session names the merchant in MerchantId. If the login that sent a request is deleted, or can no longer create payments for the merchant, before its items are processed, the request stops (2110): let a login's requests finish before you delete it or change its access. Set ValidateOnly to check the items without creating anything. This operation requires the IdempotencyKey field: for at least 24 hours, a repeated call with the same key and the same request returns the first response; after that, reusing the key of an Accepted or Processed call is refused with 2101, or with 2108 when the merchant already has 5 requests waiting or being processed.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} groupId
     * @param {boolean} validateOnly
     * @param {Array} items
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createTransferBatch(sessionToken, merchantId, groupId, validateOnly, items, idempotencyKey) {
        var methodName = "/Data/CreateTransferBatch";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "GroupId": groupId,
            "ValidateOnly": validateOnly,
            "Items": items,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Reads a request made with CreateTransferBatch: where it stands, its totals, and the outcome of its items, in pages of up to 1,000 items: send FromIndex 0, then each page's NextIndex, which is the previous FromIndex plus the number of items returned (1,000, 2,000 and so on with the default MaxItems), until NextIndex is empty. Poll it every 30 seconds with the reply's BatchId until Status is Completed, Stopped or Failed. While Status is HeldForApproval, poll about every 15 minutes instead; there is nothing to send again. Error 2112 is final: stop polling that BatchId. After any other error, read its message: sign in again if the session has expired (the BatchId stays readable), correct the call on 2003, and otherwise poll again later. The client that sent a request can always read it: a client session reads all of its client's requests, a service session those of the merchants of its services, and a merchant session those of its own merchant. Read-only logins may call it.
     * @param {string} sessionToken
     * @param {string} batchId
     * @param {number} fromIndex
     * @param {number} maxItems
     * @returns {object}
     */
    static getTransferBatchResult(sessionToken, batchId, fromIndex, maxItems) {
        var methodName = "/Data/GetTransferBatchResult";

        var data = {
            "SessionToken": sessionToken,
            "BatchId": batchId,
            "FromIndex": fromIndex,
            "MaxItems": maxItems,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Reverts (cancels or reverses) a transfer. For pending gateway payments, deletes the transfer and its public token. For processed payments, creates reversal operations for each non-fee operation. Rejects transfers over $5,000 or wallet-type transfers. For supplier transfers, only the paying merchant (fee-payer) can revert; the recipient supplier cannot revert a transfer they did not create. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} transferId
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static revertTransfer(sessionToken, transferId, idempotencyKey) {
        var methodName = "/Data/RevertTransfer";

        var data = {
            "SessionToken": sessionToken,
            "TransferId": transferId,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Updates the security question and answer on an existing Interac payment method. Creates a replacement payment method with the new credentials and deletes the old one. The answer is encrypted via the external data vault, and both question and answer are obfuscated in logs.
     * @param {string} sessionToken
     * @param {string} interacPaymentMethodId
     * @param {string} interacQuestion
     * @param {string} interacAnswer
     * @param {string} merchantId
     * @returns {object}
     */
    static changeInteracPaymentMethodQuestionAndAnswer(sessionToken, interacPaymentMethodId, interacQuestion, interacAnswer, merchantId) {
        var methodName = "/Data/ChangeInteracPaymentMethodQuestionAndAnswer";

        var data = {
            "SessionToken": sessionToken,
            "InteracPaymentMethodId": interacPaymentMethodId,
            "InteracQuestion": interacQuestion,
            "InteracAnswer": interacAnswer,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a new sub-client (child service) under the authenticated client's account. The sub-client is represented as a service entity with its own name, language, and currency.
     * @param {string} sessionToken
     * @param {string} name
     * @param {string} language
     * @param {string} currency
     * @returns {object}
     */
    static createSubClient(sessionToken, name, language, currency) {
        var methodName = "/Data/CreateSubClient";

        var data = {
            "SessionToken": sessionToken,
            "Name": name,
            "Language": language,
            "Currency": currency,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Resends the payment notification email to the customer associated with a specific payment.
     * @param {string} sessionToken
     * @param {string} paymentId
     * @param {string} merchantId
     * @returns {object}
     */
    static resendPaymentEmail(sessionToken, paymentId, merchantId) {
        var methodName = "/Data/ResendPaymentEmail";

        var data = {
            "SessionToken": sessionToken,
            "PaymentId": paymentId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Relaunches (retries) a previously failed transfer for a merchant. Resets the failed payment in the database for reprocessing and sends an internal notification email with the transfer details. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} transferId
     * @param {string} merchantId
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static relaunchMerchantFailedTransfer(sessionToken, transferId, merchantId, idempotencyKey) {
        var methodName = "/Data/RelaunchMerchantFailedTransfer";

        var data = {
            "SessionToken": sessionToken,
            "TransferId": transferId,
            "MerchantId": merchantId,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a payment transfer from the calling merchant to a supplier. Validates both merchants, runs business rules on the sending merchant's limits, creates the transfer as a free collection, and optionally creates a bill. Notifies the supplier unless client approval is required. This operation supports idempotency via the IdempotencyKey field.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {number} amount
     * @param {Date} transferDueDate
     * @param {string} targetMerchantId
     * @param {string} currency
     * @param {string} language
     * @param {string} transferFrequency
     * @param {Date} recurringEndDate
     * @param {string} billNumber
     * @param {string} billDescription
     * @param {string} billTitle
     * @param {string} idempotencyKey
     * @returns {object}
     */
    static createSupplierTransfer(sessionToken, merchantId, amount, transferDueDate, targetMerchantId, currency, language, transferFrequency, recurringEndDate, billNumber, billDescription, billTitle, idempotencyKey) {
        var methodName = "/Data/CreateSupplierTransfer";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "Amount": amount,
            "TransferDueDate": transferDueDate,
            "TargetMerchantId": targetMerchantId,
            "Currency": currency,
            "Language": language,
            "TransferFrequency": transferFrequency,
            "RecurringEndDate": recurringEndDate,
            "BillNumber": billNumber,
            "BillDescription": billDescription,
            "BillTitle": billTitle,
            "IdempotencyKey": idempotencyKey,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves the list of suppliers associated with a merchant, returning each supplier's name and identifier.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @returns {object}
     */
    static getSuppliers(sessionToken, merchantId) {
        var methodName = "/Data/GetSuppliers";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates or registers a supplier for a merchant. If a supplier with the given email already exists, reuses that supplier; otherwise provisions a new client, service, merchant, and login. Links the supplier to the calling merchant and creates a reciprocal customer record in the supplier's service.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} supplierName
     * @param {string} supplierEmail
     * @param {string} currency
     * @param {string} language
     * @param {string} accountNumber
     * @param {string} bankNumber
     * @param {string} institutionNumber
     * @returns {object}
     */
    static createSupplier(sessionToken, merchantId, supplierName, supplierEmail, currency, language, accountNumber, bankNumber, institutionNumber) {
        var methodName = "/Data/CreateSupplier";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "SupplierName": supplierName,
            "SupplierEmail": supplierEmail,
            "Currency": currency,
            "Language": language,
            "AccountNumber": accountNumber,
            "BankNumber": bankNumber,
            "InstitutionNumber": institutionNumber,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists suppliers linked to the specified merchant, including detailed information such as supplier name, email address, and creation date. For a lightweight name-and-ID-only list, use GetSuppliers instead.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @returns {object}
     */
    static listSuppliers(sessionToken, merchantId) {
        var methodName = "/Data/ListSuppliers";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Updates the display name (alias) that the payer uses to identify a supplier. The alias is a payer-side label and does not affect the supplier's own merchant name.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} merchantSupplierId
     * @param {string} supplierName
     * @returns {object}
     */
    static updateSupplierAlias(sessionToken, merchantId, merchantSupplierId, supplierName) {
        var methodName = "/Data/UpdateSupplierAlias";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "MerchantSupplierId": merchantSupplierId,
            "SupplierName": supplierName,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Soft-deletes a supplier link for the specified merchant. The supplier's merchant account is not affected — only the payer-to-supplier association is removed.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {string} merchantSupplierId
     * @returns {object}
     */
    static deleteSupplier(sessionToken, merchantId, merchantSupplierId) {
        var methodName = "/Data/DeleteSupplier";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "MerchantSupplierId": merchantSupplierId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists supplier transfers initiated by the calling merchant (identified via FeeMerchantId). Returns transfers where the caller is the fee-payer, with optional date/status filters.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {Date} fromDate
     * @param {Date} toDate
     * @param {boolean} onlyWithErrors
     * @param {boolean} markResolvedOnly
     * @param {string} transferGroupId
     * @param {string} supplierMerchantId
     * @returns {object}
     */
    static listSupplierTransfers(sessionToken, merchantId, fromDate, toDate, onlyWithErrors, markResolvedOnly, transferGroupId, supplierMerchantId) {
        var methodName = "/Data/ListSupplierTransfers";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
            "FromDate": fromDate,
            "ToDate": toDate,
            "OnlyWithErrors": onlyWithErrors,
            "MarkResolvedOnly": markResolvedOnly,
            "TransferGroupId": transferGroupId,
            "SupplierMerchantId": supplierMerchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves a single supplier transfer by ID. Accessible to both the fee-payer and the supplier. Returns the transfer details along with the counterparty name and the caller's role.
     * @param {string} sessionToken
     * @param {string} transferId
     * @returns {object}
     */
    static getSupplierTransfer(sessionToken, transferId) {
        var methodName = "/Data/GetSupplierTransfer";

        var data = {
            "SessionToken": sessionToken,
            "TransferId": transferId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists recurring supplier transfers initiated by the calling merchant. Returns recurring transfer configurations where the caller is the fee-payer.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @returns {object}
     */
    static listSupplierRecurringTransfers(sessionToken, merchantId) {
        var methodName = "/Data/ListSupplierRecurringTransfers";

        var data = {
            "SessionToken": sessionToken,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists recurring supplier transfers across an entire service. Returns every non-deleted recurring supplier transfer where any merchant in the given service is the fee-payer, with the supplier merchant's name on each entry. Use this to view all recurring supplier payments service-wide; use ListSupplierRecurringTransfers when scoping to a single fee-paying merchant.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @returns {object}
     */
    static listSupplierRecurringTransfersByService(sessionToken, serviceId) {
        var methodName = "/Data/ListSupplierRecurringTransfersByService";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves wallet operation history for a service within a specified date range. Returns the list of daily operations, the wallet balance as of the start date, and the configured delay buffer amount.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {Date} from
     * @param {Date} to
     * @returns {object}
     */
    static getWalletOperations(sessionToken, serviceId, from, to) {
        var methodName = "/Data/GetWalletOperations";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "From": from,
            "To": to,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Verifies the 2FA setup after user scans QR code and enters the code. Enables 2FA for the user once verification succeeds.
     * @param {string} sessionToken
     * @param {string} twoFactorCode
     * @returns {object}
     */
    static verify2FASetup(sessionToken, twoFactorCode) {
        var methodName = "/Data/Verify2FASetup";

        var data = {
            "SessionToken": sessionToken,
            "TwoFactorCode": twoFactorCode,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Lists the transfers of your services that are waiting to be approved or declined in the portal, the newest first. The list is not paged. A payment to a supplier is listed for the paying merchant and for the supplier; only the paying merchant can approve or decline it.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @returns {object}
     */
    static getPendingTransferApprovals(sessionToken, serviceId) {
        var methodName = "/Data/GetPendingTransferApprovals";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

}
exports.ServerCaller = ServerCaller;
