import math
from django.core.management.base import BaseCommand, CommandError
import app.models as models

class Command(BaseCommand):
	help = 'Clears app models'

	# def add_arguments(self, parser):
	# 	parser.add_argument('poll_id', nargs='+', type=int)

	def handle(self, *args, **options):
		# models.User.objects.all().delete()
		# models.Vendor.objects.all().delete()
		# models.VendorManagement.objects.all().delete()
		# models.Product.objects.all().delete()
		# models.Transaction.objects.all().delete()
		# models.TransactionItem.objects.all().delete()
		# models.CartItem.objects.all().delete()
		self.seedUser()
		self.seedVendor()
		self.seedProduct()
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
			models.Vendor.objects.create(name=name, email=email, description=description, phone_number=phone_number, longitude=0, latitude=0, timezone=0).save()

	def seedProduct(self):
		for i in range(0, 200):
			name = 'product'+str(i)
			price = i
			description = 'WTF'
			vendor = models.Vendor.objects.get(name='shop'+str(int(math.floor(i/20))))
			models.Product.objects.create(name=name, description=description, price=price, vendor=vendor).save()
