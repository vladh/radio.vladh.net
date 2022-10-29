.PHONY: publish

publish:
	rsync -Pvrthl --info=progress2 --exclude Makefile --exclude .git --delete ./ yavin:/srv/www/net.vladh.radio
