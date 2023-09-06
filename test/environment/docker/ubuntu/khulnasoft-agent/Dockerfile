FROM ubuntu:latest

RUN apt-get update && apt-get install git curl apt-transport-https lsb-release gnupg2 -y && \
    curl -s https://packages.khulnasoft.com/key/GPG-KEY-KHULNASOFT | apt-key add - && \
    echo "deb https://packages.khulnasoft.com/3.x/apt/ stable main" | tee /etc/apt/sources.list.d/khulnasoft.list && \
    apt-get update

RUN apt-get install khulnasoft-agent -y

COPY entrypoint.sh /scripts/entrypoint.sh
COPY agent-ossec.conf /var/ossec/etc/ossec.conf
