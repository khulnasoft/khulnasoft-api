#!/usr/bin/env bash

master_ip=$1
worker_ip=$2
agent_name=$3
repo=$4

apt-get update
apt-get install -y curl apt-transport-https lsb-release

curl -s https://s3-us-west-1.amazonaws.com/packages-dev.khulnasoft.com/key/GPG-KEY-KHULNASOFT | apt-key add -
if [ "X$repo" = "Xpre-release" ]
then
  echo "deb https://s3-us-west-1.amazonaws.com/packages-dev.khulnasoft.com/pre-release/apt/ unstable main" | tee -a /etc/apt/sources.list.d/khulnasoft_pre_release.list
  apt-get update
  apt-get install -y khulnasoft-agent
else
  echo "deb https://packages.khulnasoft.com/3.x/apt/ stable main" | tee -a /etc/apt/sources.list.d/khulnasoft.list
  apt-get update
  apt-get install -y khulnasoft-agent=3.5.0-1
fi

cp /vagrant/ossec_agents.conf /var/ossec/etc/ossec.conf
sed -i "s:MANAGER_IP:$master_ip:g" /var/ossec/etc/ossec.conf
/var/ossec/bin/agent-auth -m $master_ip -A $agent_name
systemctl restart khulnasoft-agent
