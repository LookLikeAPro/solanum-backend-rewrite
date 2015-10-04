# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('count', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('amount', models.IntegerField()),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='TransactionItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('amount', models.IntegerField()),
                ('count', models.IntegerField()),
                ('product', models.ForeignKey(to='app.Product')),
                ('transation', models.ForeignKey(to='app.Transaction')),
            ],
        ),
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('link', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('address', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('province', models.CharField(max_length=200)),
                ('area_code', models.CharField(max_length=200)),
                ('country_code', models.CharField(max_length=200)),
                ('timezone', models.IntegerField()),
                ('phone_number', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='VendorManagement',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
        ),
        migrations.RenameField(
            model_name='user',
            old_name='username',
            new_name='name',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AddField(
            model_name='vendormanagement',
            name='user',
            field=models.ForeignKey(to='app.User'),
        ),
        migrations.AddField(
            model_name='vendormanagement',
            name='vendor',
            field=models.ForeignKey(to='app.Vendor'),
        ),
        migrations.AddField(
            model_name='vendor',
            name='users',
            field=models.ManyToManyField(to='app.User', through='app.VendorManagement'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='user',
            field=models.ForeignKey(to='app.User'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='vendor',
            field=models.ForeignKey(to='app.Vendor'),
        ),
        migrations.AddField(
            model_name='cartitem',
            name='product',
            field=models.ForeignKey(to='app.Product'),
        ),
        migrations.AddField(
            model_name='cartitem',
            name='user',
            field=models.ForeignKey(to='app.User'),
        ),
        migrations.AddField(
            model_name='user',
            name='vendors',
            field=models.ManyToManyField(to='app.Vendor', through='app.VendorManagement'),
        ),
    ]