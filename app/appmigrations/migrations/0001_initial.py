# Generated by Django 3.2 on 2022-04-06 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('reviewer_name', models.CharField(max_length=100)),
                ('rating', models.IntegerField(default=0)),
                ('title', models.CharField(max_length=200)),
                ('comment', models.TextField()),
                ('created_on', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'review',
            },
        ),
    ]