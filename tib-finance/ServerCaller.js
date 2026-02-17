
const { CryptoCaller } = require("./CryptoCaller");

class ServerCaller {

    static initialize(baseUrl) {
        CryptoCaller.initialize(baseUrl);
    }

    /**
     * Creates the session.
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
     * Retrieves wallet information for a specific service.
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
     * Lists the merchants with boarding.
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
     * Saves the merchant account information. This operation is protected by two-factor authentication.
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
     * Adjusts the wallet balance for a merchant.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @param {string} merchantId
     * @param {number} amount
     * @param {string} mode
     * @param {boolean} useInterac
     * @returns {object}
     */
    static adjustWallet(sessionToken, serviceId, merchantId, amount, mode, useInterac) {
        var methodName = "/Data/AdjustWallet";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
            "MerchantId": merchantId,
            "Amount": amount,
            "Mode": mode,
            "UseInterac": useInterac,
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
     * @param {string} cardOwner
     * @param {string} zipCode
     * @param {string} language
     * @returns {object}
     */
    static createCreditCardPaymentMethod(sessionToken, currency, customerId, isCustomerAutomaticPaymentMethod, creditCard, cardOwner, zipCode, language) {
        var methodName = "/Data/CreateCreditCardPaymentMethod";

        var data = {
            "SessionToken": sessionToken,
            "Currency": currency,
            "CustomerId": customerId,
            "IsCustomerAutomaticPaymentMethod": isCustomerAutomaticPaymentMethod,
            "CreditCard": creditCard,
            "CardOwner": cardOwner,
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
     * Lists transfers using an optimized fast query.
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
     * Lists recurring transfers for a merchant.
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
     * Deletes a recurring transfer.
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
     * Creates the payment.
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
     * @returns {object}
     */
    static createPayment(sessionToken, billId, setPaymentCustomerFromBill, customerEmail, paymentInfo, merchantId, externalReferenceId, safetyToBreakIfOverRemainingBillAmount, autorizedPaymentMethod, askForCustomerConsent, doNotSendEmail, immediateTransfer, statementDescription) {
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
     * Creates the direct Interac transaction
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
     * @returns {object}
     */
    static createDirectInteracTransaction(sessionToken, merchantId, interacInformation, transferDirection, dueDate, amount, statementDescription, currency, language, referenceNumber) {
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
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates the transaction from raw.
     * @param {string} sessionToken
     * @param {string} rawAcpFileContent
     * @param {string} merchantId
     * @returns {object}
     */
    static createTransactionFromRaw(sessionToken, rawAcpFileContent, merchantId) {
        var methodName = "/Data/CreateTransactionFromRaw";

        var data = {
            "SessionToken": sessionToken,
            "RawAcpFileContent": rawAcpFileContent,
            "MerchantId": merchantId,
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
     * Forces the payment process.
     * @param {string} sessionToken
     * @param {string} paymentId
     * @returns {object}
     */
    static forcePaymentProcess(sessionToken, paymentId) {
        var methodName = "/Data/ForcePaymentProcess";

        var data = {
            "SessionToken": sessionToken,
            "PaymentId": paymentId,
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
     * Creates the free operation.
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
     * @param {string} groupId
     * @param {boolean} immediateTransfer
     * @param {string} statementDescription
     * @param {boolean} stopSameIdentifications
     * @returns {object}
     */
    static createFreeOperation(sessionToken, merchantId, billId, customerId, paymentMethodId, transferType, referenceNumber, amount, language, transactionDueDate, transferTitle, transferDescription, transferExternalSystemNumber, transferFrequency, groupId, immediateTransfer, statementDescription, stopSameIdentifications) {
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
            "GroupId": groupId,
            "ImmediateTransfer": immediateTransfer,
            "StatementDescription": statementDescription,
            "StopSameIdentifications": stopSameIdentifications,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a batch of free operations.
     * @param {string} sessionToken
     * @param {Array} freeOperationBatchList
     * @param {string} groupId
     * @param {boolean} stopSameIdentifications
     * @returns {object}
     */
    static createFreeOperationBatch(sessionToken, freeOperationBatchList, groupId, stopSameIdentifications) {
        var methodName = "/Data/CreateFreeOperationBatch";

        var data = {
            "SessionToken": sessionToken,
            "FreeOperationBatchList": freeOperationBatchList,
            "GroupId": groupId,
            "StopSameIdentifications": stopSameIdentifications,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Reverts a completed transfer.
     * @param {string} sessionToken
     * @param {string} transferId
     * @returns {object}
     */
    static revertTransfer(sessionToken, transferId) {
        var methodName = "/Data/RevertTransfer";

        var data = {
            "SessionToken": sessionToken,
            "TransferId": transferId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Modifies the security question and answer for an Interac payment method associated with a customer account.
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
     * Initializes the merchant boarding process.
     * @param {string} sessionToken
     * @param {string} serviceId
     * @returns {object}
     */
    static initBoarding(sessionToken, serviceId) {
        var methodName = "/Data/InitBoarding";

        var data = {
            "SessionToken": sessionToken,
            "ServiceId": serviceId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a sub-client account.
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
     * Resends a payment notification email.
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
     * Relaunches a failed merchant transfer.
     * @param {string} sessionToken
     * @param {string} transferId
     * @param {string} merchantId
     * @returns {object}
     */
    static relaunchMerchantFailedTransfer(sessionToken, transferId, merchantId) {
        var methodName = "/Data/RelaunchMerchantFailedTransfer";

        var data = {
            "SessionToken": sessionToken,
            "TransferId": transferId,
            "MerchantId": merchantId,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Creates a transfer to a supplier.
     * @param {string} sessionToken
     * @param {string} merchantId
     * @param {number} amount
     * @param {Date} transferDueDate
     * @param {string} targetMerchantId
     * @param {string} currency
     * @param {string} language
     * @param {string} transferFrequency
     * @param {string} billNumber
     * @param {string} billDescription
     * @param {string} billTitle
     * @returns {object}
     */
    static createSupplierTransfer(sessionToken, merchantId, amount, transferDueDate, targetMerchantId, currency, language, transferFrequency, billNumber, billDescription, billTitle) {
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
            "BillNumber": billNumber,
            "BillDescription": billDescription,
            "BillTitle": billTitle,
        };

        return CryptoCaller.callTibFinance(methodName, data);
    }

    /**
     * Retrieves the list of suppliers for a merchant.
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
     * Creates a new supplier for a merchant.
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
     * Retrieves wallet operations and transaction history for a merchant.
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

}
exports.ServerCaller = ServerCaller;
