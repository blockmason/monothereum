FROM twuni/javascript:1.0.9

WORKDIR /home/project

COPY . /home/project

RUN yarn --silent install

RUN yarn --silent build

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["start"]
