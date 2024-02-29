install:
	npm ci

menu-game:
	node bin/menu-game.js

brain-games:
	node bin/brain-games.js

brain-scm:
	node bin/brain-scm.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .