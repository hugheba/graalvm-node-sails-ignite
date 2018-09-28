FROM danny02/graalvm


ENV GRAAL_HOME /graalvm-ce-1.0.0-rc6
ENV APP_HOME "/app"
ENV PATH "${GRAAL_HOME}/jre/languages/js/bin:${PATH}"
ENV NODE_ENV production

COPY app.tgz /tmp/app.tgz

RUN mkdir $APP_HOME && \
    tar -xf /tmp/app.tgz -C $APP_HOME && \
    cd /app && \
    npm install && \
    npm install -g sails

WORKDIR $APP_HOME

ENTRYPOINT node --jvm --jvm.cp="node_modules/hugheba-graaljs-ignite/lib/hugheba-graaljs-ignite-all.jar" app.js

EXPOSE 1337
