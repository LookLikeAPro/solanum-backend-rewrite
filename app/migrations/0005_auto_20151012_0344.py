# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20151012_0244'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vendor',
            name='link',
        ),
        migrations.AddField(
            model_name='vendor',
            name='slug',
            field=models.CharField(unique=True, max_length=200, default=1),
            preserve_default=False,
        ),
    ]
