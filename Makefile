install:
	npm ci

menu-game:
	node bin/menu-game.js

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run