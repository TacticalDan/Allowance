import { Transaction, AccountName } from "./types";

export const transactions: Array<Transaction<AccountName>> = [

    // Starting off with a certain amount of money in the accounts
    ["Ashley", -44.73, "Starting bonus"],
    ["Nathan", -38.28, "Starting bonus"],
    ["Lilian", -10.5, "Starting bonus"],
    ["Food", -154.9, "Starting bonus"],
    ["Social", -42.24, "Starting bonus"],
    ["Emergency", -327.28, "Starting bonus"],
    ["Vacation", -696.75, "Starting bonus"],

    // Regular spending
    ["Food", 62.32, "Groceries"],
    ["Food", 5.51, "Ashley Coffee"],
    ["Food", 124.36, "Groceries"],

    // Test transactions, figure out when you'll be able to make the next big purchase...
    // ["Nathan", 900, "Laptop [Sell Previous]"], // 6 months of allowance 😔
];

// 👇 Insert new timestamp each transaction update! [ctrl+shift+i]
export const lastTransactionUpdateTime = 1615242405556;
// Tool - https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring