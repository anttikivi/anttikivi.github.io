build:
	@printf "\nBuilding the website...\n\n"
	hugo

dev:
	@printf "\nRunning development server...\n\n"
	hugo server -D

fmt:
	@printf "\nFormatting...\n\n"
	prettier --write "**/*.{html,js?(on),md,yml}"
	taplo fmt "**/*.toml"

lint:
	@printf "\nLinting...\n\n"
	prettier --check "**/*.{html,js?(on),md,yml}"
	taplo fmt --check "**/*.toml"
	taplo check "**/*.toml"
