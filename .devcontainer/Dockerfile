# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/master/containers/javascript-node/.devcontainer/base.Dockerfile
ARG VARIANT="10"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# Install PowerShell 7
RUN wget https://packages.microsoft.com/config/debian/10/packages-microsoft-prod.deb && sudo dpkg -i packages-microsoft-prod.deb \
    && apt-get update && apt-get install -y powershell