FROM centos:latest

RUN yum install which -y

RUN rpm --import http://packages.khulnasoft.com/key/GPG-KEY-KHULNASOFT
COPY khulnasoft-repository.txt /etc/yum.repos.d/khulnasoft.repo

RUN yum install khulnasoft-agent-3.5.0 -y

COPY entrypoint.sh /scripts/entrypoint.sh
