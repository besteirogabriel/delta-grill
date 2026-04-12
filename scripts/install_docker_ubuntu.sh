#!/usr/bin/env bash
set -euo pipefail

if [ "$(id -u)" -ne 0 ]; then
  echo "Por favor, rode como root (sudo)."
  exit 1
fi

# Remove versões antigas
apt-get remove -y docker docker-engine docker.io containerd runc || true

# Dependências
apt-get update -y
apt-get install -y ca-certificates curl gnupg

# Repositório oficial Docker
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Habilita e inicia
systemctl enable docker
systemctl start docker

# Permite usar docker sem sudo (para o usuário atual)
if [ -n "${SUDO_USER:-}" ]; then
  usermod -aG docker "$SUDO_USER"
  echo "Usuario $SUDO_USER adicionado ao grupo docker. Faça logout/login para aplicar."
fi

# Teste rápido
if docker --version; then
  echo "Docker instalado com sucesso."
fi
