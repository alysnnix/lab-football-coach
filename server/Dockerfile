FROM ubuntu:22.04

# ... (todas as suas instalações continuam as mesmas) ...
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
# ... (instalação do Go, Rust, sqlx-cli, etc. continua a mesma) ...

ENV GO_VERSION=1.22.2
RUN wget https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz && \
    rm go${GO_VERSION}.linux-amd64.tar.gz
ENV PATH="/usr/local/go/bin:${PATH}"

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

RUN cargo install sqlx-cli
RUN python3 -m pip install load_dotenv psycopg2

WORKDIR /app
COPY . /app

RUN go build -o main cmd/api/main.go

# --- INÍCIO DAS MODIFICAÇÕES ---
# Copia o script de entrypoint para dentro do contêiner
COPY entrypoint.sh /app/entrypoint.sh
# Dá permissão de execução para o script
RUN chmod +x /app/entrypoint.sh

# Define o nosso script como o ponto de entrada do contêiner
ENTRYPOINT ["/app/entrypoint.sh"]
# --- FIM DAS MODIFICAÇÕES ---

# O comando abaixo será passado como argumento para o ENTRYPOINT
CMD ["./main"]