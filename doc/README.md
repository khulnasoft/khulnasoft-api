# Generating Khulnasoft API Reference documentation

## Environment
It is necessary to set up a Docker environment for generating the API documentation. There are Docker environments in this repository. Please, follow the next steps for setting up a Docker environment:
```shellsession
$ cd {KHULNASOFT_API_PATH}/test/environment/docker/centos
$ docker-compose up -d
$ docker exec -it centos_khulnasoft-master_1 bash
```

## Generate documentation:

Inside the container, execute the following commands and the `.rst` file will be generated:
```shellsession
# cd /khulnasoft-api/doc
# ./generate_api_doc.sh
# cd /khulnasoft-documentation
# make html
```

Review **/khulnasoft-documentation/source/user-manual/api/reference.rst**, specially *Example Response* section.
