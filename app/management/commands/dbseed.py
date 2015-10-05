import math
from django.core.management.base import BaseCommand, CommandError
import app.models as models

class Command(BaseCommand):
	help = 'Clears app models'

	# def add_arguments(self, parser):
	# 	parser.add_argument('poll_id', nargs='+', type=int)

	def handle(self, *args, **options):
		self.seedUser()
		self.seedVendor()
		self.seedProduct()
		self.seedTransaction()

		self.stdout.write('Seeding complete')

	def seedUser(self):
		models.User.objects.create(name='Jerry Zhou', email='test@test.com', password='123456').save()
		for i in range(0, 200):
			email = str(i)+'@test.com'
			models.User.objects.create(name=i, email=email, password=i).save()

	def seedVendor(self):
		for i in range(0, 20):
			name = 'shop'+str(i)
			email = 'shop'+str(i)+'@solanum.com'
			description = 'test'
			phone_number = '111111'+str(i)
			# user = models.User.objects.get(name=i)
			newVendor = models.Vendor.objects.create(name=name, email=email, description=description, phone_number=phone_number, longitude=0, latitude=0, timezone=0)
			# newVendor.users.add(user)
			newVendor.save()

	def seedProduct(self):
		for i in range(0, 200):
			name = 'product'+str(i)
			price = i
			description = 'WTF'
			vendor = models.Vendor.objects.get(name='shop'+str(int(math.floor(i/20))))
			models.Product.objects.create(name=name, description=description, price=price, vendor=vendor).save()

	def seedTransaction(self):
		for i in range(0, 400):
			amount = i
			vendor = models.Vendor.objects.get(name='shop'+str(int(math.floor(i/20))))
			user = models.User.objects.get(name=str(int(math.floor(i/2))))
			models.Transaction.objects.create(amount=amount, user=user, vendor=vendor).save()
