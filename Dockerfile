# Use Nginx base image
FROM nginx:stable-alpine

# Install Node 20
RUN apk add --update nodejs npm

# Install pnpm
RUN npm install -g pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Set the working directory in the builder
WORKDIR /app

# Copy the entire monorepo and install dependencies and build
COPY . .
RUN rm -rf node_modules **/node_modules
RUN pnpm install
RUN pnpm run build

# Copy necessary build outputs and dependencies to nginx
RUN cp -r ./frontend/dist/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx is running on
EXPOSE 80
EXPOSE 443

# Install PM2
RUN npm install -g pm2

# Use the start script as the entrypoint
ENTRYPOINT ["./start.sh"]