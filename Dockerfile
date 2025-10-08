# Use Hugo base image
FROM klakegg/hugo:0.121.0-ext-alpine

# Set working directory
WORKDIR /site

# Copy site files
COPY . /site

# Build the site
CMD ["hugo", "--gc", "--minify"]
