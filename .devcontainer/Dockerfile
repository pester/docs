#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/master/containers/javascript-node/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# Refresh GPG keys to avoid error with Yarn repo
RUN apt-key adv --refresh-keys --keyserver keyserver.ubuntu.com

# Install PowerShell 7
RUN wget https://packages.microsoft.com/config/debian/10/packages-microsoft-prod.deb && sudo dpkg -i packages-microsoft-prod.deb \
    && apt-get update && apt-get install -y powershell \
    # Clean up
    && rm packages-microsoft-prod.deb && rm -rf /var/lib/apt/lists/*