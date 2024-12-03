# # Use an official Python runtime as a parent image
# FROM python:3.11-slim-bullseye

# # Set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# # Install system dependencies
# RUN apt-get update && apt-get install -y \
#     wget gnupg2 lsb-release software-properties-common && \
#     echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | tee /etc/apt/sources.list.d/pgdg.list && \
#     wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
#     apt-get update && apt-get install -y \
#     postgresql-14 \
#     postgresql-14-postgis-3 \
#     postgresql-14-postgis-3-scripts && \
#     apt-get clean && rm -rf /var/lib/apt/lists/*

# ENV GDAL_DATA=/usr/share/gdal
# ENV GDAL_CONFIG=/usr/bin/gdal-config
# ENV PATH="${PATH}:/usr/lib/postgresql/12/bin"

# # Set GDAL configurations
# ENV GDAL_CONFIG=/usr/bin/gdal-config

# # Set work directory
# WORKDIR /app

# # Copy only requirements to cache them in docker layer
# COPY requirements.txt /app/

# # Install dependencies using pip
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the rest of the project files
# COPY . /app/

# # Expose port
# EXPOSE 8000

# # Set the default command to start the app
# CMD ["python", "main.py"]

# Use a Debian-based image
FROM python:3.9-slim

# Set environment variables for non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies and GDAL
RUN apt-get update && apt-get install -y \
    wget gnupg2 lsb-release software-properties-common build-essential \
    gdal-bin libgdal-dev && \
    echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | tee /etc/apt/sources.list.d/pgdg.list && \
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    apt-get update && apt-get install -y \
    postgresql-14 \
    postgresql-14-postgis-3 \
    postgresql-14-postgis-3-scripts && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set GDAL_CONFIG environment variable
ENV GDAL_CONFIG=/usr/bin/gdal-config

# Set PATH for GDAL libraries
ENV CPLUS_INCLUDE_PATH=/usr/include/gdal
ENV C_INCLUDE_PATH=/usr/include/gdal

# Copy your backend code
WORKDIR /app
COPY . /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the backend port
EXPOSE 8000

# Command to run the application
CMD ["python", "main.py"]
