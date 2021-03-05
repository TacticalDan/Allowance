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

];

// 👇 Insert new timestamp each transaction update!
export const lastTransactionUpdateTime = 1614924888526;
// Tool to insert timestamp - https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring