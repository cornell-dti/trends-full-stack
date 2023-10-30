# Use the official Node.js image as a builder
FROM nginx:stable-bullseye

# Install Node 20
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Install pnpm
RUN npm install -g pnpm

# Set the working directory in the builder
WORKDIR /app

# Copy the entire monorepo and install dependencies
COPY . .
RUN rm -rf node_modules **/node_modules
RUN pnpm install
RUN pnpm run build

# Copy necessary build outputs and dependencies to nginx
RUN cp -r ./frontend/dist/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx is running on
EXPOSE 80

# Install PM2
RUN npm install -g pm2

# Copy the start script
COPY start.sh /start.sh

# Use the start script as the entrypoint
ENTRYPOINT ["/start.sh"]