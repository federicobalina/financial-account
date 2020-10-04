from marshmallow import Schema, fields, validate
from domain import TYPES


class Transaction(Schema):
	id = fields.UUID(required=True, dump_only=True)
	type = fields.String(required=True)
	amount = fields.Float(required=True, validate=validate.Range(min=0))
	date = fields.String(required=True, data_key='effectiveDate',
						 dump_only=True)
