1. Relation between table "Events" and "Locations" are one-to-many. "Locations" has many "Events", "Events" belongs to "Locations"
2. Relation between table "Events" and "Tickets" are one-to-many, "Events" has many type of "Tickets", "Tickets" belong to "Events"
3. Each ticket has its own type, price, amount, and schedule
4. Relation between table "Transactions" and "Tickets" are many-to-many and using "TransactionTickets" as conjugation table
5. Each Transaction only can buy one type of ticket
6. Customer can create new transaction whenever until ticket sold out