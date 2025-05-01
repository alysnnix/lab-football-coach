### Pré-requisitos

Você precisa ter instalado o seguinte software:

- [Go](https://golang.org/doc/install)
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Make](https://www.gnu.org/software/make/)
- [Python3](https://www.python.org/downloads/)
- [Pip](https://pip.pypa.io/en/stable/installation/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Rustup](https://rustup.rs/)
- [Sqlx](https://github.com/launchbadge/sqlx/blob/main/sqlx-cli/README.md)

### Instalação

Após instalar os pré-requisitos, você precisa instalar as dependências do projeto.

```bash
pip install load_dotenv
pip install psycopg2
```

Após instalar as dependências, você precisa construir o contêiner do banco de dados. Certifique-se de ter seu arquivo .env com os valores corretos, conforme exemplificado no .env.sample.

```bash
 docker compose up -d
```

Após construir o contêiner do banco de dados, você precisa executar as migrações.

```bash
make run_migrations
```

Após executar as migrações, popule o banco de dados com dados falsos

```bash
make populate_db
```

Depois disso, você precisa buildar e executar a aplicação.

```bash
make build
make run
```

Você também pode executar a aplicação com recarga ao vivo usando air ou o comando make fornecido abaixo na seção Makefile.

## Makefile

```bash
make build
```

Construir a aplicação

```bash
make build
```

Executar a aplicação

```bash
make run
```

Recarga ao vivo da aplicação. Se você já tem air instalado, mas nosso comando não estiver funcionando, você pode executá-lo diretamente com air.

```bash
make watch
```

Executar a suíte de testes

```bash
make test
```

Limpar binário da última construção

```bash
make clean
```

Executar as migrações

```bash
make run_migrations
```

Executar o rollback das migrações, você precisa executar isso uma vez para cada migração que deseja reverter.

```bash
make rollback_migrations
```

Preencher o banco de dados com dados falsos

```bash
make populate_db
```