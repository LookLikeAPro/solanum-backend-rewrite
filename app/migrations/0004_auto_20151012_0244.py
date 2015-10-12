# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20151010_0111'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transactionitem',
            old_name='transation',
            new_name='transaction',
        ),
    ]
