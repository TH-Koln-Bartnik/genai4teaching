#!/usr/bin/env bash
# Löscht 50 überholte bzw. vollständig in main enthaltene Branches auf GitHub (Entscheidung Roman, MC 13.11.2026).
# Laiensicht: Ein Branch ist ein Seitenarm der Arbeit; nach dem Zusammenführen ist er nur noch ein Etikett auf
# Commits, die main ohnehin enthält. Das Skript entfernt die Etiketten, nicht die Arbeit.
# Aufruf in Git Bash im lokalen Klon von genai4teaching:  bash notes/aufraeumen-reduktion/branches-loeschen-2026-11-13.sh
# Sicherung: --force-with-lease löscht einen Branch nur, wenn er noch auf dem unten notierten Commit steht.
# Wiederherstellen: git push origin <commit>:refs/heads/<branch>
set -u
git push --force-with-lease=reduktion-anhang:4aefcfb13b1cdfdd7c76be18bb0256e3b26f968b origin :reduktion-anhang
git push --force-with-lease=prompting-film-stuetzraeder-c:d2b3b25b59346914b01eede56da556550898d69e origin :prompting-film-stuetzraeder-c
git push --force-with-lease=vorwort-praxisbeispiele:01921479767b06a50fc08c5273e8dfa5269eb220 origin :vorwort-praxisbeispiele
git push --force-with-lease=schluesselbegriffe-kap02-06:81afc78c78ab5d4cd61bb2fa05f952d9daceb5a3 origin :schluesselbegriffe-kap02-06
git push --force-with-lease=reduktion-k3:a5f276b0dc02a651606b0486810b312481b7ae9b origin :reduktion-k3
git push --force-with-lease=prompting-rollen-evidenz:5da15a8190486c270be957b773ae07945cbd2b19 origin :prompting-rollen-evidenz
git push --force-with-lease=kapitel01-verbreitung:ef1d04d664ff61e0c06ebc4124e57df80e19b768 origin :kapitel01-verbreitung
git push --force-with-lease=archiv-integration:12964a8c63d0b5514a498b4dc4858943b71e901f origin :archiv-integration
git push --force-with-lease=mollick-s3-bibliothek:58320cdd4de2d06e167f2ca7e7021ea1947c26c8 origin :mollick-s3-bibliothek
git push --force-with-lease=kapitelauftakt-kap04-06:33faa4a261c8658592c1ea65f55756095e4c3fa8 origin :kapitelauftakt-kap04-06
git push --force-with-lease=vorwort-wie-dieses-buch-lehrt:cc3cce99182845fc9b2e3ddaf414dfdab63a7e05 origin :vorwort-wie-dieses-buch-lehrt
git push --force-with-lease=mollick-s2-podcast:c0fef1d81f016ad0d9b67b9f24d522cbebb7c044 origin :mollick-s2-podcast
git push --force-with-lease=prompting-streichtest:c79ae490a39b8c6431017d92e7c10ea5d481e27a origin :prompting-streichtest
git push --force-with-lease=reduktion-k1:6906c6de680ef8dca370d4db60b3ea3d08bf194c origin :reduktion-k1
git push --force-with-lease=prompting-kuerzung:d093947fd62aca818420fb32d20f3dd1062655ef origin :prompting-kuerzung
git push --force-with-lease=s9-sprachcheck-kap01-02:301e1a879f34373d48b547c4b5eba0fa8becbea4 origin :s9-sprachcheck-kap01-02
git push --force-with-lease=phrasencheck-kap01-03:b6d626ee86510b8b05e7c42167e33195000ac54d origin :phrasencheck-kap01-03
git push --force-with-lease=fachbegriffe-s6-teil2:665d382920800e6638845f055dec4afe2f893555 origin :fachbegriffe-s6-teil2
git push --force-with-lease=fachbegriffe-s6:561b1c2b6ab6712db1e10eec5d24975af8cb8ea8 origin :fachbegriffe-s6
git push --force-with-lease=reduktion-k4:dcc44724b672533829f1c2fc65341fae1332e46a origin :reduktion-k4
git push --force-with-lease=kapitel02-neugliederung:e0a71f7749b3af89e5988d31d09850085b4ded55 origin :kapitel02-neugliederung
git push --force-with-lease=reduktion-k67:a3e96a8619f3d2fb08cd263e6b2948c4c772bd2c origin :reduktion-k67
git push --force-with-lease=animationen-tempo:5c9a7d998b9f40164d61f1c54e29d487bd2f9d80 origin :animationen-tempo
git push --force-with-lease=kapitel02-kessler-quelle:16c87085640f5ad29d7976714e1429749b6acf00 origin :kapitel02-kessler-quelle
git push --force-with-lease=vorwort-kuerzen:42b92e92c6a831321722a52968930af600c54dfb origin :vorwort-kuerzen
git push --force-with-lease=tabellen-in-kaesten:7a26cfcf520bb30b1cdd8baf787df66d9cc29b0d origin :tabellen-in-kaesten
git push --force-with-lease=kapitelauftakt-kap02-03:aa2d8dfb8fb52a3cb1e820ff4d8f2e7942d91ba9 origin :kapitelauftakt-kap02-03
git push --force-with-lease=wiss-schreiben-a-d:065e2dc9ddd7e0df49740123b75c2581e861ccf4 origin :wiss-schreiben-a-d
git push --force-with-lease=schreibtrainer-gpt-ersatz:b2a4a1a1559f6f955f5317e97b2e527ff6ad6dec origin :schreibtrainer-gpt-ersatz
git push --force-with-lease=vorwort-lernpfade:2f41e2a255dfdeccc36306a8e229bfc9965c5acb origin :vorwort-lernpfade
git push --force-with-lease=reduktion-pb:fb1191b5544dcccf704fae117437a3d8316ea75b origin :reduktion-pb
git push --force-with-lease=kapitel01-forschungsueberblick:9c05121b02cb45b5eeecb311e6721f7f689dbb7c origin :kapitel01-forschungsueberblick
git push --force-with-lease=kapitel03-tabelle-kernaussagen:b8195637ef8d2dc3583c466d295d4d1960f542fc origin :kapitel03-tabelle-kernaussagen
git push --force-with-lease=kapitel04-p5:d10d58cfd6ecabb843ad4d430093bf3ba8bc2fd5 origin :kapitel04-p5
git push --force-with-lease=kapitel04-video-aufgabenmodell:c5b72caa629f8dddac0576b1d7dcaa8feefad309 origin :kapitel04-video-aufgabenmodell
git push --force-with-lease=kapitel04-aufgabenmodell:f756f5f0c4da69b10742f71d207dc9d279838a6f origin :kapitel04-aufgabenmodell
git push --force-with-lease=reduktion-k2:25431078640b32ca335a490e50020db08f89e721 origin :reduktion-k2
git push --force-with-lease=reduktion-k5:53ffcbddff378f856cfc6cd83f08238005ac2b7b origin :reduktion-k5
git push --force-with-lease=k3-kapitelauftakt:1e01e5245fb294661202be6297c579f16a8da4fa origin :k3-kapitelauftakt
git push --force-with-lease=k3b-kasten2-engpass:7aa6516232e020f1501b6d22e1226305cb826998 origin :k3b-kasten2-engpass
git push --force-with-lease=k5-kasten3-hausaufgabe:2ba1edb8131132ac637a797bca1c5a24a3b6cfe2 origin :k5-kasten3-hausaufgabe
git push --force-with-lease=k7-kasten-holbein:b1c6bc7cd2831739c3c895c944a725d25be9b795 origin :k7-kasten-holbein
git push --force-with-lease=primer-anhang:fa69f1e6dc63313a80f9d24572faec84dddc67b4 origin :primer-anhang
git push --force-with-lease=best-practice-vorreiter:06276a02d56a58e39a337023194b10bae18341e1 origin :best-practice-vorreiter
git push --force-with-lease=abb-3-1-befundtext:dbf474e83c5f5f7e33608af7fd4fcef67906d47a origin :abb-3-1-befundtext
git push --force-with-lease=abb-3-1-heatmap:f14d9d48fe22e27578648fb06cf1e6aa3757a7d0 origin :abb-3-1-heatmap
git push --force-with-lease=umzug-phase1:4006a9c176822bb0da36e53ad0f8c2a76ec7fee5 origin :umzug-phase1
git push --force-with-lease=claude/semester-simulator:4bbc643df024fb44d3943d5b8e2a0498c61ad9b1 origin :claude/semester-simulator
git push --force-with-lease=entfernen-agenten-engpass:dc380d8dcf4f59661a77f9a0ac3d867b2a001f66 origin :entfernen-agenten-engpass
git push --force-with-lease=vorwort-galerie-14:fbea18067ba29e80b1a9325f871e58a69ffba811 origin :vorwort-galerie-14
