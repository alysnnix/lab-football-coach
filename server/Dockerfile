FROM ubuntu:22.04

# Update and install basic packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    wget \
    nano \
    build-essential \
    make \
    git \
    python3 \
    python3-pip \
    python3-venv \
    nodejs \
    npm \
    postgresql-client \
    mysql-client \
    redis-tools \
    vim \
    htop \
    tree \
    zip \
    unzip \
    jq \
    sqlite3 \
    openssh-client \
    software-properties-common \
    apt-transport-https \
    gnupg \
    lsb-release \
    && rm -rf /var/lib/apt/lists/*

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Instalar Rust de forma não interativa
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Adicionar o cargo ao PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Instalar sqlx-cli via cargo
RUN cargo install sqlx-cli

RUN python3 -m pip install --upgrade pip
RUN apt-get update && \
    apt-get install -y --no-install-recommends postgresql && \
    rm -rf /var/lib/apt/lists/*


# Set working directory
WORKDIR /app

# Copy project files
COPY . /app

# Default command (run all make targets in sequence)
RUN make run_migrations && make populate_db && make build && make run
