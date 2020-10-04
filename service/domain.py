from uuid import uuid4
from datetime import datetime


CREDIT = "credit"
DEBIT = "debit"
TYPES = [CREDIT, DEBIT]

class Transaction:
    def __init__(self, type, amount):
        self.id = uuid4()
        self.type = type
        self.amount = amount
        self.date = datetime.utcnow()


class Account:
    def __init__(self):
        self.transactions = []
        self.balance = 0

    def process_transaction(self, transaction):
        if transaction.type == CREDIT:
            self.balance += transaction.amount
        else:
            new_balance = self.balance - transaction.amount
            if new_balance < 0:
                raise NegativeBalance
            self.balance = new_balance
        self.transactions.append(transaction)


class NegativeBalance(Exception):
    pass
