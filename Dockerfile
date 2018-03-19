FROM twuni/javascript:1.0.7

WORKDIR /home/project

COPY . /home/project

RUN yarn install

RUN yarn build

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["start"]
