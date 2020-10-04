import marshmallow
import threading
from flask import Flask, request

from schemas import Transaction as TransactionSchema
from domain import Transaction, Account, NegativeBalance

app = Flask(__name__)
account = Account()
transaction_schema = TransactionSchema()
sem = threading.Semaphore()


@app.route('/transactions', methods=['GET'])
def get_transaction_history():
    return {'transactions': transaction_schema.dump(account.transactions,
                                                    many=True)}


@app.route('/transactions', methods=['POST'])
def commit_transaction():
    try:
        data = transaction_schema.load(request.json)
    except marshmallow.ValidationError as e:
        return e.normalized_messages(), 400
    try:
        sem.acquire()
        account.process_transaction(Transaction(data['type'], data['amount']))
        sem.release()
    except NegativeBalance:
        sem.release()
        return {'message': 'Transaction cannot be commited because it would '
                           'produce a negative balance'}, 400
    return 'OK'


@app.route('/balance', methods=['GET'])
def get_account_balance():
    return {'balance': account.balance}


if __name__ == '__main__':
	app.run(host='0.0.0.0')
