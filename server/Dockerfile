FROM ubuntu:22.04

ENV PORT=8080
ENV APP_ENV=local
ENV DB_HOST=localhost
ENV DB_PORT=54325
ENV DB_DATABASE=sensedia-challenge-api
ENV DB_USERNAME=sensedia-challenge-api
ENV DB_PASSWORD=sensedia-challenge-api
ENV DSN="host=${DB_HOST} port=${DB_PORT} user=${DB_USERNAME} password=${DB_PASSWORD} dbname=${DB_DATABASE} sslmode=disable timezone=UTC connect_timeout=5"


# Update and install basic packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    wget \
    build-essential \
    make \
    python3 \
    python3-pip \
    python3-venv \
    python3-dev \
    libpq-dev \
    postgresql-client \
    openssh-client \
    pkg-config \
    libssl-dev \
    lsb-release \
    && rm -rf /var/lib/apt/lists/*

# Instalar Go
ENV GO_VERSION=1.22.2
RUN wget https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz && \
    rm go${GO_VERSION}.linux-amd64.tar.gz
ENV PATH="/usr/local/go/bin:${PATH}"

# Instalar Rust de forma não interativa
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# Adicionar o cargo ao PATH
ENV PATH="/root/.cargo/bin:${PATH}"
# Instalar sqlx-cli via cargo
RUN cargo install sqlx-cli

# Instalar dependências Python
RUN python3 -m pip install load_dotenv psycopg2

# Set working directory
WORKDIR /app
# Copy project files
COPY . /app

RUN go build -o main cmd/api/main.go

# Copiar o script de entrypoint
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Definir entrypoint
ENTRYPOINT ["/entrypoint.sh"]

CMD ["./main"]