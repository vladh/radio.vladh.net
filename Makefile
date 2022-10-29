# © 2022 Vlad-Stefan Harbuz <vlad@vladh.net>
# SPDX-License-Identifier: GPL-3.0-only

.PHONY: publish

publish:
	rsync -Pvrthl --info=progress2 --exclude Makefile --exclude .git --delete ./ yavin:/srv/www/net.vladh.radio
