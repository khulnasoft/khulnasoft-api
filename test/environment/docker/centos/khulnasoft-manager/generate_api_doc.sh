#!/usr/bin/env bash
/var/ossec/framework/python/bin/python3 ./generate_rst.py /khulnasoft-documentation/source/user-manual/api/reference.rst
cd /khulnasoft-documentation
make html
