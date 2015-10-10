# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20151010_0111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='link',
            field=models.CharField(blank=True, max_length=200, unique=True),
        ),
    ]
